import './list.js';
import './detail.js';
import './test.js';
import './upload.js';
import '../submission/main.js';
import './main.html';

Template.problem_main.onCreated(function() {
	this.currentProblemId = new ReactiveVar();
});

Template.problem_main.onRendered(function() {
	this.$('.nav-link')[0].click();
});

Template.problem_main.helpers({
	shareArgs() {
		return { currentProblemId: Template.instance().currentProblemId };
	}
});