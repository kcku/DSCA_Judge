import '/imports/ui/problem/main.js';
import '/imports/ui/student/main.js';

MeteorMathJax.sourceUrl = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML';

Template.registerHelper("momentReactive", (date) => momentReactive(date));

Template.body.onCreated(function() {
	this.autorun(() => this.subscribe('Students.findOne', Meteor.userId()));
});

Template.body.onRendered(() => {
	this.$('.nav-link')[1].click();
});

Template.body.events({
	'submit .login-form'(event) {
		const target = event.currentTarget;
		const username = target.username.value;
		const password = target.password.value;

		event.preventDefault();
		Meteor.loginWithPassword(username, password);
	},
	'submit .logout-form'(event) {
		event.preventDefault();
		Meteor.logout();
	}
});