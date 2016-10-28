import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../../imports/api/messages';
import RenderMessage from './RenderMessage';
import InputForm from './InputForm';
import SelectField from './SelectField';

class App extends Component {

	submitData(event) {
		event.preventDefault();

		const location	= event.currentTarget.location.value

		Meteor.call('editUserLocation', location)
	}

	renderMessages() {
		const userLocation = this.props.messages.filter( message => (
			message.location === this.props.currentUser.location
		));
		return userLocation.map( message => (
			<RenderMessage 
				key={message._id} 
				message={message} 
			/>
		));
	}

	render() {
		const {currentUser} = this.props;
		if (!currentUser) {
			return <p className="noUser">Please sign in and select location to start chatting</p>;
		}

		if (!currentUser.location) {
			const optionsValue = [
				"London",
				"Chicago",
				"Boston",
				"Madrid",
			]
			return (
				<div className="select-location">
					<p>Select chatting location</p>
					<form className="input-form" onSubmit={this.submitData.bind(this)} >
						<SelectField
							name="location"
							value="London"
							optionsValue={optionsValue}
						/>
						<br />
						<button>Submit</button>
					</form>
				</div>
			)
		}

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
