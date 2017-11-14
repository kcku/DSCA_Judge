import { Problems } from '/imports/api/problem.js';
import { Students } from '/imports/api/student.js';
import './list.js';
import './detail.js';
import './main.html';

Template.submission_main.onCreated(function() {
	this.currentSubmissionId = new ReactiveVar();
});

Template.submission_main.helpers({
	shareArgs() {
		return {
			currentProblemId: this.currentProblemId,
			currentStudentId: this.currentStudentId,
			currentSubmissionId: Template.instance().currentSubmissionId,
			getProblemTitle(problemId) {
				return Meteor.getValue(Problems, problemId, 'title');
			},
			getStudentUsername(studentId) {
				return Meteor.getValue(Students, studentId, 'username');
			},
			getStatusClass(status) {
				switch(status) {
					case 'Accepted':      return 'text-success';
					case 'Compile Error': return 'text-warning';
					case 'Pending':
					case 'Initializing':
					case 'Compiling':
					case 'Running':
					case 'Judging':       return 'text-info';
					default:              return 'text-danger';
				}
			}
		};
	}
});