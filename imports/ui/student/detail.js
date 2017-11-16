import { Students } from '/imports/api/student.js';
import './detail.html';

Template.student_detail.onCreated(function() {
	this.autorun(() => this.subscribe('Students.findOne', this.data.currentStudentId.get()));
});

Template.student_detail.onRendered(function() {
	this.$('[class*=edit]').hide();
});

Template.student_detail.helpers({
	currentStudent() {
		const student = Students.findOne({ _id: this.currentStudentId.get() });

		if (student == undefined) {
			this.currentStudentId.set(null);
		}
		return student;
	}
});

Template.student_detail.events({
	'blur [class*=edit]'(event, instance) {
		const target = event.currentTarget;
		const toggle = target.dataset.toggle;
		const field = target.name;
		const value = target.value;
		
		instance.$(target).hide();
		instance.$(toggle).show();
		
		Meteor.call('Students.update', this.currentStudentId.get(), { [field]: value });
	},
	'click [class*=view]'(event, instance) {
		if (!Meteor.isAdmin()) return;
		
		const target = event.currentTarget;
		const toggle = target.dataset.toggle;

		instance.$(target).hide();
		instance.$(toggle).show().focus();
	},
	'click [type=checkbox]'(event) {
		const target = event.currentTarget;
		const field = target.name;
		const value = target.checked;

		Meteor.call('Students.update', this.currentStudentId.get(), { [field]: value });
	},
	'submit .chgpwd-form'(event) {
		const target = event.currentTarget;
		const oldPassword = target.oldPassword.value;
		const newPassword = target.newPassword.value;

		event.preventDefault();
		Meteor.call('Students.changePassword', oldPassword, newPassword);
	}
});
