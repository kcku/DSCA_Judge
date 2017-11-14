import { Problems, ProblemTests } from './problem.js';
import './utility.js';

export const Submissions = new Mongo.Collection('Submissions');
export const SubmissionResults = new Mongo.Collection('SubmissionResults');

if (Meteor.isServer) {
	Meteor.publish('Submissions.findAllByFilter', function(problemId, studentId) {
		const filter = { $or: [{ problemId: problemId }, { studentId, studentId }]};
		const option = { fields: { _id: 1, problemId: 1, studentId: 1, createdAt: 1, status: 1, score: 1, isExam: 1 }};

		return Submissions.find(filter, option);
	});
	Meteor.publish('Submissions.findOne', function(id) {
		const filter = { _id: id };
		const option = {};

		if (!Meteor.isAdmin() && !Meteor.isOwner(Meteor.getValue(Submissions, id, 'studentId'))) {
			option.fields = { code: 0 };
		}
		return Submissions.find(filter, option);
	});
	Meteor.publish('SubmissionResults.findAllBySubmission', function(submissionId) {
		const filter = { submissionId: submissionId };
		const option = {};

		return SubmissionResults.find(filter, option);
	});
}

Meteor.methods({
	'Submissions.insert'(problemId, studentId, lang, code) {
		if (!Meteor.isAdmin() && (!Meteor.isOwner(studentId) || !Meteor.getValue(Problems, problemId, 'isPublic'))) return;
		
		const submissionId = Submissions.insert({
			problemId: problemId,
			studentId: studentId,
			createdAt: new Date().getTime(),
			status: 'Pending',
			score: 0,
			lang: lang,
			code: code,
			isExam: Meteor.getValue(Problems, problemId, 'isExam')
		});
		if (Meteor.isServer) {
			Meteor.call('Submissions.createDir', submissionId);
		}
	},
	'Submissions.remove'(filter) {
		if (!Meteor.isAdmin()) return;

		if (Meteor.isServer) {
			Submissions.find(filter).forEach((submission) => {
				Meteor.call('SubmissionResults.remove', { submissionId: submission._id });
				Meteor.call('Submissions.removeDir', submission._id);
			});
		}
		Submissions.remove(filter);
	},
	'Submissions.update'(id, option) {
		if (!Meteor.isAdmin()) return;

		Submissions.update({ _id: id }, { $set: option });

		if (Meteor.isServer) {
			Meteor.call('SubmissionResults.remove', { submissionId: id });
			Meteor.call('Submissions.createDir', id);
		}
	}
});