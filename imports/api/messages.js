import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
	newMessage(text){
		check(text, String);

		//if (!this.userId) {
		//	throw new Meteor.Error('not-authorized');
		//}

		Messages.insert({
			text,
			createdAt: new Date(),
		});
	},
});