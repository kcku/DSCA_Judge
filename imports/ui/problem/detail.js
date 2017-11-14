import { Problems } from '/imports/api/problem.js';
import './detail.html';

Template.problem_detail.onCreated(function() {
	this.autorun(() => this.subscribe('Problems.findOne', this.data.currentProblemId.get()));
});

Template.problem_detail.onRendered(function() {
	this.$('[class*=edit]').hide();
});

Template.problem_detail.helpers({
	currentProblem() {
		const problem = Problems.findOne({ _id: this.currentProblemId.get() });

		if (problem == undefined) {
			this.currentProblemId.set(null);
		}
		return problem;
	}
});

Template.problem_detail.events({
	'blur [class*=edit]'(event, instance) {
		const target = event.currentTarget;
		const toggle = target.dataset.toggle;
		const field = target.name;
		const value = target.value;

		instance.$(target).hide();
		instance.$(toggle).show();
		
		Meteor.call('Problems.update', this.currentProblemId.get(), { [field]: value });
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

		Meteor.call('Problems.update', this.currentProblemId.get(), { [field]: value });
	}
});