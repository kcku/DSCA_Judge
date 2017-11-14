import { ProblemTests } from '/imports/api/problem.js';
import './test.html';

Template.problem_test.onCreated(function() {
	this.currentProblemTestId = new ReactiveVar();
	this.autorun(() => this.subscribe('ProblemTests.findOne', this.currentProblemTestId.get()));
	this.autorun(() => this.subscribe('ProblemTests.findAllByProblem', this.data.currentProblemId.get()));
});

Template.problem_test.onRendered(function() {
	this.$('[class*=edit]').hide();
});

Template.problem_test.helpers({
	problemTestList() {
		return ProblemTests.find({ problemId: this.currentProblemId.get() }, { fields: { _id: 1, isPublic: 1 }, sort: { _id: 1 }});
	},
	currentProblemTest() {
		const problemTest = ProblemTests.findOne({ _id: Template.instance().currentProblemTestId.get(), problemId: this.currentProblemId.get() });
		
		if (problemTest == undefined) {
			Template.instance().currentProblemTestId.set(null);
		}
		return problemTest;
	}
});

Template.problem_test.events({
	'click .insert-btn'() {
		Meteor.call('ProblemTests.insert', this.currentProblemId.get());
	},
	'click .remove-btn'(event) {
		const id = event.currentTarget.dataset.id;
		Meteor.call('ProblemTests.remove', { _id: id });
	},
	'click .get-btn'(event, instance) {
		const id = event.currentTarget.dataset.id;
		instance.currentProblemTestId.set(id);
	},
	'blur [class*=edit]'(event, instance) {
		const target = event.currentTarget;
		const toggle = target.dataset.toggle;
		const field = target.name;
		const value = target.value;

		instance.$(target).hide();
		instance.$(toggle).show();
		
		Meteor.call('ProblemTests.update', instance.currentProblemTestId.get(), { [field]: value });
	},
	'click [class*=view]'(event, instance) {
		if (!Meteor.isAdmin()) return;
		
		const target = event.currentTarget;
		const toggle = target.dataset.toggle;

		instance.$(target).hide();
		instance.$(toggle).show().focus();
	},
	'click [type=checkbox]'(event, instance) {
		const target = event.currentTarget;
		const field = target.name;
		const value = target.checked;

		Meteor.call('ProblemTests.update', instance.currentProblemTestId.get(), { [field]: value });
	}
});