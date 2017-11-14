Meteor.getValue = function(collection, id, field) {
	const doc = collection.findOne({ _id: id }, { fields: { [field]: 1 }});
	return doc ? doc[field] : null;
}

Meteor.isAdmin = function() {
	const user = Meteor.user();
	return user && user.isAdmin;
}

Meteor.isOwner = function(id) {
	const user = Meteor.user();
	return user && user._id == id;
}