import {Meteor} from 'meteor/meteor';

import {Messages} from '../imports/api/messages';
import '../imports/api/server/userMethods';

Meteor.publish('messages', function(){
	const currentUser = Meteor.users.findOne(this.userId);
	return Messages.find({ location: currentUser.location});
});

Meteor.publish('userData', function(){
	return Meteor.users.find({_id: this.userId});
});
