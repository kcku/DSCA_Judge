Accounts.onCreateUser((option, user) => {
	return _.extend(user, _.pick(option, 'fullname', 'year', 'isAdmin'));
});