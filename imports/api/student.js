import { Random } from 'meteor/random';
import './utility.js';

export const Students = Meteor.users;

if (Meteor.isServer) {
	Meteor.publish('Students.findAll', function() {
		const filter = {};
		const option = { fields: { _id: 1, username: 1, isAdmin: 1 }};

		return Students.find(filter, option);
	});
	Meteor.publish('Students.findOne', function(id) {
		const filter = { _id: id };
		const option = { fields: { _id: 1, username: 1, fullname: 1, emails: 1, year: 1, isAdmin: 1 }};

		return Students.find(filter, option);
	});
}

Meteor.methods({
	'Students.insert'() {
		if (!Meteor.isAdmin()) return;

		Accounts.createUser({
			username: 'Sample Username',
			fullname: 'Sample Fullname',
			password: Random.id(),
			email: 'dsca@inrg.csie.ntu.edu.tw',	
			year: new Date().getFullYear(),
			isAdmin: false
		});
	},
	'Students.remove'(filter) {
		if (!Meteor.isAdmin()) return;

		Students.find(filter).forEach((student) => {
			Meteor.call('Submissions.remove', { studentId: student._id });
		});
		Students.remove(filter);
	},
	'Students.update'(id, option) {
		if (!Meteor.isAdmin() || !Meteor.isServer) return;

		if (option.username) {
			Accounts.setUsername(id, option.username);
			delete option.username;
		}
		if (option.password) {
			Accounts.setPassword(id, option.password);
			delete option.password;
		}
		if (option.email) {
			Students.update({ _id: id }, { $set: { emails: [] }});
			Accounts.addEmail(id, option.email);
			delete option.email;
		}
		if (!_.isEmpty(option)) {
			Students.update({ _id: id }, { $set: option });
		}
	},
	'Students.changePassword'(oldPassword, newPassword) {
		if (!Meteor.isServer) return;

		Meteor.call('changePassword', oldPassword, newPassword);
	}
});