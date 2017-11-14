import { Submissions, SubmissionResults } from './submission.js';
import { ProblemTests } from './problem.js';
import ps from 'child_process';
import fs from 'fs';

Meteor.methods({
	'Submissions.createDir'(id) {
		Submissions.update({ _id: id }, { $set: { status: 'Initializing', score: 0 }});
		
		const submission = Submissions.findOne({ _id: id });
		const dirpath  = Meteor.dataPath+id;
		const filepath = Meteor.dataPath+id+'/code.'+submission.lang;
		const execpath = Meteor.dataPath+id+'/exec';
		
		Meteor.wrapAsync(ps.exec)('mkdir -p '+dirpath);
		Meteor.wrapAsync(fs.writeFile)(filepath, submission.code);
		
		Submissions.update({ _id: id }, { $set: { status: 'Compiling' }});

		try{
			if (submission.lang == 'c') {
				Meteor.wrapAsync(ps.exec)('gcc '+filepath+' -o'+execpath+' -O2 -std=c99 -lm');
			}
			else if (submission.lang == 'cpp') {
				Meteor.wrapAsync(ps.exec)('g++ '+filepath+' -o'+execpath+' -O2 -std=c++11');
			} else {
				Submissions.update({ _id: id }, { $set: { status: 'Language Error' }});
				return;
			}
		} catch(e) {
			Submissions.update({ _id: id }, { $set: { status: 'Compile Error' }});
			return;
		}
		Submissions.update({ _id: id }, { $set: { status: 'Running' }});

		const filter = { problemId: submission.problemId };
		if (!submission.isExam) filter.isPublic = true;

		ProblemTests.find(filter).forEach((problemTest) => {
			Meteor.call('SubmissionResults.insert', problemTest._id, id);
		})
		Meteor.call('Submissions.getResult', id);
	},
	'Submissions.removeDir'(id) {
		const dirpath = Meteor.dataPath+id;
		Meteor.wrapAsync(ps.exec)('rm -rf '+dirpath);
	},
	'Submissions.getResult'(id) {
		const result = { status: null, score: 0	};

		SubmissionResults.find({ submissionId: id }).forEach((submissionResult) => {
			if (submissionResult.status == "Accepted")
				result.score += Number(Meteor.getValue(ProblemTests, submissionResult.problemTestId, 'score'));
			
			if (submissionResult.status != 'Accepted' || result.status == null)
				result.status = submissionResult.status;
		});
		Submissions.update({ _id: id }, { $set: result });
	},
	'SubmissionResults.createDir'(id) {
		SubmissionResults.update({ _id: id }, { $set: { status: 'Initializing' }});

		const submissionResult = SubmissionResults.findOne({ _id: id });
		const problemTest = ProblemTests.findOne({ _id: submissionResult.problemTestId }, { fields: { timeLimit: 1, memoryLimit: 1 }});
		const execpath = Meteor.dataPath+submissionResult.submissionId+'/exec';
		const inpath  = Meteor.dataPath+submissionResult.problemTestId+'/input';
		const anspath = Meteor.dataPath+submissionResult.problemTestId+'/output';
		const dirpath = Meteor.dataPath+id;
		const outpath = Meteor.dataPath+id+'/output';
		const respath = Meteor.dataPath+id+'/result';
		const execcmd = Meteor.rootPath+'sandbox/runner '+problemTest.timeLimit+' '+problemTest.memoryLimit+' '+execpath+' < '+inpath+' > '+outpath+' 2>'+respath;

		Meteor.wrapAsync(ps.exec)('mkdir -p '+dirpath);

		SubmissionResults.update({ _id: id }, { $set: { status: 'Running' }});

		Meteor.wrapAsync(ps.exec)(execcmd, { stdio: 'inherit' });

		SubmissionResults.update({ _id: id }, { $set: { status: 'Judging' }});

		let result = null;
		try {
			result = JSON.parse(Meteor.wrapAsync(fs.readFile)(respath));
		} catch(e) {
			result = { status: 'Runtime Error', timeUsed: 0, memoryUsed: 0 };
		}
		if (result.status == 'OK') {
			try {
				Meteor.wrapAsync(ps.exec)('diff -w '+outpath+' '+anspath);
				result.status = 'Accepted';
			} catch(e) {
				result.status = 'Wrong Answer';
			}
		}
		SubmissionResults.update({ _id: id }, { $set: result });
	},
	'SubmissionResults.removeDir'(id) {
		const dirpath = Meteor.dataPath+id;
		Meteor.wrapAsync(ps.exec)('rm -rf '+dirpath);
	},
	'SubmissionResults.insert'(problemTestId, submissionId) {
		const submissionResultId = SubmissionResults.insert({
			problemTestId: problemTestId,
			submissionId: submissionId,
			timeUsed: null,
			memoryUsed: null,
			status: 'Pending'
		});
		Meteor.call('SubmissionResults.createDir', submissionResultId);
	},
	'SubmissionResults.remove'(filter) {
		SubmissionResults.find(filter).forEach((submissionResult) => {
			Meteor.call('SubmissionResults.removeDir', submissionResult._id);
		});
		SubmissionResults.remove(filter);
	}
});