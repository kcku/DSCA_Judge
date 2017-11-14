import { Submissions, SubmissionResults } from '/imports/api/submission.js';
import './detail.html';

Template.submission_detail.onCreated(function() {
	this.autorun(() => {
		this.subscribe('Submissions.findOne', this.data.currentSubmissionId.get());
		this.subscribe('SubmissionResults.findAllBySubmission', this.data.currentSubmissionId.get());
	});
});

Template.submission_detail.onRendered(function() {
	this.$('.nav-link')[0].click();
	this.$('[class*=edit]').hide();
});

Template.submission_detail.helpers({
	currentSubmission() {
		const submission = Submissions.findOne({ _id: this.currentSubmissionId.get() });

		if (submission == undefined) {
			this.currentSubmissionId.set(null);
		} else {
			Template.instance().$('.detail-modal').modal();
		}
		return submission;
	},
	submissionResultList() {
		return SubmissionResults.find({ submissionId: this.currentSubmissionId.get() }, { sort: { problemTestId: 1 }});
	}
});

Template.submission_detail.events({
	'blur [class*=edit]'(event, instance) {
		const target = event.currentTarget;
		const toggle = target.dataset.toggle;
		const field = target.name;
		const value = target.value;

		instance.$(target).hide();
		instance.$(toggle).show();
		
		Meteor.call('Submissions.update', this.currentSubmissionId.get(), { [field]: value });
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

		Meteor.call('Submissions.update', this.currentSubmissionId.get(), { [field]: value });
	},
	'click [type=radio]'(event) {
		const target = event.currentTarget;
		const field = target.name;
		const value = target.value;

		Meteor.call('Submissions.update', this.currentSubmissionId.get(), { [field]: value });	
	},
	'hidden.bs.modal .detail-modal'() {
		this.currentSubmissionId.set(null);
	}
});