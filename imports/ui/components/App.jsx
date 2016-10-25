import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../../imports/api/messages';
import RenderMessage from './RenderMessage';
import InputForm from './InputForm';

class App extends Component {

	renderMessages() {
		console.log(this.props.messages)
		const userLocation = this.props.messages.filter( message => (
			message.location === this.props.currentUser.location
		));
		console.log(userLocation);
		return userLocation.map( message => (
			<RenderMessage 
				key={message._id} 
				message={message} 
			/>
		));
	}

	render() {
		const {currentUser} = this.props;
		if (!currentUser) return null;
		if (!currentUser.location) return null;
		return (
			<div>
				<div className="chat-container-wrapper">
					<h3>current location: {currentUser.location}</h3>
					<div className="chat-container">				
						{this.renderMessages()}
					</div>
				</div>
				<InputForm />
			</div>
		);
	}
}

App.propTypes = {
	messages: PropTypes.array,
	currentUser: PropTypes.object,
};

export default createContainer(() => {

	Meteor.subscribe('messages');
	Meteor.subscribe('userData');

	return {
		messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
		currentUser: Meteor.user(),
	};
}, App, );
