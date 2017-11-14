import { Students } from '/imports/api/student.js';
import './list.html';

Template.student_list.onCreated(function() {
	this.subscribe('Students.findAll');
});

Template.student_list.helpers({
	studentList() {
		return Students.find({}, { fields: { _id: 1, username: 1, isAdmin: 1 }, sort: { username: 1 }});
	}
});

Template.student_list.events({
	'click .insert-btn'() {
		Meteor.call('Students.insert');
	},
	'click .remove-btn'(event) {
		const id = event.currentTarget.dataset.id;
		Meteor.call('Students.remove', { _id: id });
	},
	'click .get-btn'(event) {
		const id = event.currentTarget.dataset.id;
		this.currentStudentId.set(id);
	}
});