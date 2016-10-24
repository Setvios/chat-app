import { Meteor } from 'meteor/meteor';
import { Messages } from '../imports/api/messages';
import '../imports/api/server/userMethods'

Meteor.startup(() => {
	Meteor.publish('messages', function(){
		return Messages.find({});
	});	
});