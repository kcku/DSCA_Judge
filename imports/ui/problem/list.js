import { Problems } from '/imports/api/problem.js';
import './list.html';

Template.problem_list.onCreated(function() {
	this.subscribe('Problems.findAll');
});

Template.problem_list.helpers({
	problemList() {
		return Problems.find({}, { fields: { _id: 1, title: 1, isExam: 1, isPublic: 1 }, sort: { title: 1 }});
	}
});

Template.problem_list.events({
	'click .insert-btn'() {
		Meteor.call('Problems.insert');
	},
	'click .remove-btn'(event) {
		const id = event.currentTarget.dataset.id;
		Meteor.call('Problems.remove', { _id: id });
	},
	'click .get-btn'(event) {
		const id = event.currentTarget.dataset.id;
		this.currentProblemId.set(id);
	}
});