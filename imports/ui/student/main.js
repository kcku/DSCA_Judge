import './list.js';
import './detail.js';
import '../submission/main.js';
import './main.html';

Template.student_main.onCreated(function() {
	this.currentStudentId = new ReactiveVar();
});

Template.student_main.onRendered(function() {
	this.$('.nav-link')[0].click();
});

Template.student_main.helpers({
	shareArgs() {
		return { currentStudentId: Template.instance().currentStudentId };
	}
});