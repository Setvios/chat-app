import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';
import moment from 'moment';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
	newMessage(text){
		check(text, String);

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Messages.insert({
			text,
			createdAt: new Date(),
			timestamp: moment().format('ddd HH:mm'),
			username: Meteor.users.findOne(this.userId).username,
			location: Meteor.users.findOne(this.userId).location,
		});
	},
});