import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../../imports/api/messages';
import RenderMessage from './RenderMessage';
import InputForm from './InputForm';

class App extends Component {

	renderMessages() {
		return this.props.messages.map( message => (
			<RenderMessage key={message._id} message={message} />
		));
	}

	render() {
		return (
			<div>
				<div className="messages-container">				
						{this.renderMessages()}
				</div>
				<InputForm />
			</div>
		);
	}
}

App.propTypes = {
	messages: PropTypes.array,
};

export default createContainer(() => {

	Meteor.subscribe('messages');

	return {
		messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
	};
}, App);
