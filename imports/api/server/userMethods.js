import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
	editUserData(name, email, location){
		check(name, String);
		check(email, String);
		check(location, String);

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Meteor.users.update(
			{ _id: this.userId }, 
			{
				$set: {
					username: name, 
					"emails.0": { address: email},  
					location: location
				}
			}
		)		
	},

	editUserLocation(location){
		check(location, String);

		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Meteor.users.update(
			{ _id: this.userId }, 
			{
				$set: {
					location: location
				}
			}
		)		
	},
});