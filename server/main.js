import {Meteor} from 'meteor/meteor';

import {Messages} from '../imports/api/messages';
import '../imports/api/server/userMethods';

Meteor.publish('messages', function(limit){
	const currentUser = Meteor.users.findOne(this.userId);
	const defaultLimit = limit || 15;
	return Messages.find(
		{ location: currentUser.location },
		{ sort: {createdAt: -1}, limit: defaultLimit }
	);
});

Meteor.publish('userData', function(){
	return Meteor.users.find({ _id: this.userId });
});

Meteor.publish("userStatus", function() {
	return Meteor.users.find({ "status.online": true });
});
