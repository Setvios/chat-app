import { Meteor } from 'meteor/meteor';
import { Messages } from '../imports/api/messages';

Meteor.startup(() => {
	Meteor.publish('messages', function(){
		return Messages.find({});
	});	
});