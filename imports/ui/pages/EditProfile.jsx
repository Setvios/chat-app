import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

import TextField from '../components/TextField';

class EditProfile extends Component {

	submitData(event) {
		event.preventDefault();

		const form = event.currentTarget;
		
		const newName = form.newName.value;
		const newEmail = form.newEmail.value;
		const location = form.location.value;

		Meteor.call('editUserData', newName, newEmail, location, (err) => {
			if (err) console.error(err.reson);

			form.newName.value = '';
			form.newEmail.value = '';
			form.location.value = '';

			FlowRouter.go('chat');
		});
	}

	render() {
		const {currentUser} = this.props;
		if (!currentUser) return null;
		return (
			<div className="profile-container">
				<form className="input-form" onSubmit={this.submitData.bind(this)} >
					<h4>Change user name</h4>
					<TextField
						type="text"
						name="newName"
						value={currentUser.username}
						placeholder="Type new name"
					/>
					<br />
					<h4>Change user email</h4>
					<TextField
						type="email"
						name="newEmail"
						value={currentUser.emails[0].address}
						placeholder="Type new email"
					/>
					<br />
					<div className="select-container">
						<h4>Select chatting location</h4>
						<select 
							name="location" 
							value={currentUser.location} 
							onChange={()=>{}} 
							required
						>
							<option value="London">London</option>
							<option value="Chicago">Chicago</option>
							<option value="Boston">Boston</option>
							<option value="Madrid">Madrid</option>
						</select>
					</div>
					<br />
					<button>Submit changes</button>
				</form>
			</div>
		);
	}
}

EditProfile.propTypes = {
	currentUser: PropTypes.object,
};

export default createContainer(() => {
	return { 
		currentUser: Meteor.user(),
	};
}, EditProfile);
