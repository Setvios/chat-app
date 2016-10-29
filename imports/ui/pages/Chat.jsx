import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

import RenderMessage from '../components/RenderMessage';
import InputForm from '../components/InputForm';
import SelectField from '../components/SelectField';
import {Messages} from '../../../imports/api/messages';

class App extends Component {

	changeLocation(location) {
		Meteor.call('editUserLocation', location);
	}

	renderMessages() {
		const userLocation = this.props.messages.filter(message => (
			message.location === this.props.currentUser.location
		));
		return userLocation.map(message => (
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
					<SelectField
						name="location"
						value={optionsValue[0]}
						optionsValue={optionsValue}
						onChange={this.changeLocation.bind(this)}
					/>
				</div>
			)
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

App.propTypes = {
	messages: PropTypes.array.isRequired,
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
