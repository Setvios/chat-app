import { Meteor } from 'meteor/meteor';

import { Messages } from '../imports/api/messages';
import '../imports/api/server/userMethods';

Meteor.publish('messages', function(){
	return Messages.find();
});

Meteor.publish('userData', function(){
	return Meteor.users.find({_id: this.userId});
});
