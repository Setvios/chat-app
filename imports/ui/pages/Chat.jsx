import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

import RenderMessage from '../components/RenderMessage';
import InputForm from '../components/InputForm';
import SelectField from '../components/SelectField';
import {Messages} from '../../../imports/api/messages';

class Chat extends Component {
	constructor(props){
		super(props)

		this.state = {
			loadedMessages: 15
		}
	}

	componentDidMount() {
		this.scrollToLastMessage();
	}

	componentDidUpdate() {
		this.scrollToLastMessage();
	}

	scrollToLastMessage() {
		const container = $('.chat-container-wrapper');
		const messagesHeight = $('.chat-container').height();
		container.scrollTop(messagesHeight);
	}

	changeLocation(location) {
		Meteor.call('editUserLocation', location);
	}

	renderMessages() {
		const {messages, currentUser, usersOnline} = this.props;
		return messages.map(message => (
			<RenderMessage
				key={message._id}
				message={message}
				currentUser={currentUser}
				usersOnline={usersOnline}
			/>
		));
	}

	loadMoreMessages(){
		const loadedMessages = this.state.loadedMessages + 15;
		Meteor.subscribe('messages', loadedMessages);
		this.setState({loadedMessages})
	}

	render() {
		const {currentUser, isLoading} = this.props;
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
					<button onClick={this.loadMoreMessages.bind(this)}>show previous messages</button>
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
	usersOnline: PropTypes.array,
	isLoading: PropTypes.bool,
}; 

export default createContainer(() => {
	let isLoading = true;
	Meteor.subscribe('messages');
	Meteor.subscribe('userStatus');
	if (Meteor.subscribe('userData').ready()) {
		isLoading = false;
	}

	return {
		messages: Messages.find({}, { sort: { createdAt: 1 } }).fetch(),
		usersOnline: Meteor.users.find({ "status.online": true }).fetch(),
		currentUser: Meteor.user(),
		isLoading,
	};
}, Chat);
