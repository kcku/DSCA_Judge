import { SubmissionResults } from './submission.js';
import './utility.js';

export const Problems = new Mongo.Collection('Problems');
export const ProblemTests = new Mongo.Collection('ProblemTests');

if (Meteor.isServer) {
	Meteor.publish('Problems.findAll', function() {
		const filter = {};
		const option = { fields: { _id: 1, title: 1, isExam: 1, isPublic: 1 }};

		if (!Meteor.isAdmin()) {
			filter.isPublic = true;
		}
		return Problems.find(filter, option);
	});
	Meteor.publish('Problems.findOne', function(id) {
		const filter = { _id: id };
		const option = {};

		if (!Meteor.isAdmin()) {
			filter.isPublic = true;
		}
		return Problems.find(filter, option);
	});
	Meteor.publish('ProblemTests.findAllByProblem', function(problemId) {
		const filter = { problemId: problemId };
		const option = { fields: { _id: 1, problemId: 1, isPublic: 1 }};

		if (!Meteor.isAdmin()) {
			if (!Meteor.getValue(Problems, problemId, 'isPublic')) {
				filter.problemId = null;
			}
			filter.isPublic = true;
		}
		return ProblemTests.find(filter, option);
	});
	Meteor.publish('ProblemTests.findOne', function(id) {
		const filter = { _id: id };
		const option = {};

		if (!Meteor.isAdmin()) {
			const problemId = Meteor.getValue(ProblemTests, id, 'problemId');

			if (!Meteor.getValue(Problems, problemId, 'isPublic')) {
				filter._id = null;
			}
			filter.isPublic = true;
		}
		return ProblemTests.find(filter, option);
	});
}

Meteor.methods({
	'Problems.insert'() {
		if (!Meteor.isAdmin()) return;

		Problems.insert({
			title: 'Sample Title',
			description: 'Sample Description',
			inputFormat: 'Sample Input Format',
			outputFormat: 'Sample Output Format',
			hint: 'Sample Hint',
			isExam: false,
			isPublic: false
		});
	},
	'Problems.remove'(filter) {
		if (!Meteor.isAdmin()) return;

		Problems.find(filter).forEach((problem) => {
			Meteor.call('ProblemTests.remove', { problemId: problem._id });
			Meteor.call('Submissions.remove', { problemId: problem._id });	
		});
		Problems.remove(filter);
	},
	'Problems.update'(id, option) {
		if (!Meteor.isAdmin()) return;

		Problems.update({ _id: id }, { $set: option });
	},
	'ProblemTests.insert'(problemId) {
		if (!Meteor.isAdmin()) return;

		const problemTestId = ProblemTests.insert({
			problemId: problemId,
			input: 'Sample Input',
			output: 'Sample Output',
			timeLimit: 1000,
			memoryLimit: 64000,
			score: 5,
			isPublic: false
		});
		if (Meteor.isServer) {
			Meteor.call('ProblemTests.createDir', problemTestId);
		}
	},
	'ProblemTests.remove'(filter) {
		if (!Meteor.isAdmin()) return;

		ProblemTests.find(filter).forEach((problemTest) => {
			Meteor.call('SubmissionResults.remove', { problemTestId: problemTest._id });

			if (Meteor.isServer) {
				Meteor.call('ProblemTests.removeDir', problemTest._id);
			}
		});
		ProblemTests.remove(filter);
	},
	'ProblemTests.update'(id, option) {
		if (!Meteor.isAdmin()) return;

		ProblemTests.update({ _id: id }, { $set: option });

		if (Meteor.isServer) {
			if (option.input) Meteor.call('ProblemTests.writeFile', id, 'input', option.input);
			if (option.output) Meteor.call('ProblemTests.writeFile', id, 'output', option.output);
			if (option.score) {
				SubmissionResults.find({ problemTestId: id }).forEach((submissionResult) => {
					Meteor.call('Submissions.getResult', submissionResult.submissionId);
				});
			}
		}
	}
});