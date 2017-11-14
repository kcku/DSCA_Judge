import './upload.html';

Template.problem_upload.events({
	'submit .upload-form'(event) {
		const target = event.currentTarget;
		const lang = target.lang.value;
		const code = target.code.value;

		target.code.value = null;
		event.preventDefault();
		Meteor.call('Submissions.insert', this.currentProblemId.get(), Meteor.userId(), lang, code);
	}
});

