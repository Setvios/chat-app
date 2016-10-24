import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';


class EditProfile extends Component {

	submitData(event) {
		event.preventDefault();

		const newName = event.currentTarget.newName.value
		const newEmail = event.currentTarget.newEmail.value
		const location	= event.currentTarget.location.value

		Meteor.call('editUserData', newName, newEmail, location)

		event.currentTarget.newName.value = '';
		event.currentTarget.newEmail.value = '';
		event.currentTarget.location.value = '';

	}

	render() {
		return (
			<div className="profile-container">
				{console.log(this.props.currentUser)}
				<form className="input-form" onSubmit={this.submitData.bind(this)} >
					
					<input
						type="text"
						name="newName"
					// value="current user name"	
						placeholder="Type new name"
					/>
					<br />
					<input
						type="email"
						name="newEmail"
					//	value = current user email
						placeholder="Type new email"
					/>
					<br />
					<select name="location"	value="">
						<option>London</option>
						<option>Chicago</option>
						<option>Boston</option>
						<option>Madrid</option>
					</select>
					<br />
					<button>Submit changes</button>
				
				</form>
			</div>
		);
	}
}

export default createContainer(() => {

	return {
		currentUser: Meteor.user(),
	 };	
}, EditProfile);
