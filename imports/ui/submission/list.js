import { Submissions } from '/imports/api/submission.js';
import './list.html';

Template.submission_list.onCreated(function() {
	this.autorun(() => {
		const problemId = this.data.currentProblemId ? this.data.currentProblemId.get() : null;
		const studentId = this.data.currentStudentId ? this.data.currentStudentId.get() : null;
		this.subscribe('Submissions.findAllByFilter', problemId, studentId);
	});
});

Template.submission_list.helpers({
	submissionList() {
		const problemId = this.currentProblemId ? this.currentProblemId.get() : null;
		const studentId = this.currentStudentId ? this.currentStudentId.get() : null;
		const filter = { $or: [{ problemId: problemId }, { studentId: studentId }]};
		return Submissions.find(filter, { fields: { _id: 1, problemId: 1, studentId: 1, createdAt: 1, status: 1, isExam: 1 }, sort: { createdAt: -1 }});
	}
});

Template.submission_list.events({
	'click .remove-btn'(event) {
		const id = event.currentTarget.dataset.id;
		Meteor.call('Submissions.remove', { _id: id });
	},
	'click .get-btn'(event) {
		const id = event.currentTarget.dataset.id;
		this.currentSubmissionId.set(id);
	}
});