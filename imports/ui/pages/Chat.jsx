import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

import RenderMessage from '../components/RenderMessage';
import InputForm from '../components/InputForm';
import SelectField from '../components/SelectField';

class Chat extends Component {

	changeLocation(location) {
		Meteor.call('editUserLocation', location);
	}

	renderMessages() {
		return this.props.messages.map(message => (
			<RenderMessage
				key={message._id}
				message={message}
			/>
		));
	}

	render() {
		const { currentUser, isLoading } = this.props;
		if (isLoading) {
			return <p className="noUser">Loading...</p>;
		}
		if (!currentUser) {
			return <p className="noUser">Please sign in and select location to start chatting</p>;
		}
		if (!currentUser.location) {
			return (
				<div className="select-location">
					<p>Select chatting location</p>
					<SelectField
						name="location"
						onChange={this.changeLocation.bind(this)}
					/>
				</div>
			);
		}

		return (
			<div>
				<div className="location-wrapper">
				<h3>current location: <b>{currentUser.location}</b></h3>
				</div>
				<div className="chat-container-wrapper">
					<div className="chat-container">
						{this.renderMessages()}
					</div>
				</div>
				<InputForm />
			</div>
		);
	}
}

Chat.propTypes = {
	messages: PropTypes.array.isRequired,
	currentUser: PropTypes.object,
}; 

export default createContainer(() => {
	let isLoading = true;
	Meteor.subscribe('messages');
	if (Meteor.subscribe('userData').ready()) {
		isLoading = false;
	}

	return {
		messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
		currentUser: Meteor.user(),
		isLoading,
	};
}, Chat);
