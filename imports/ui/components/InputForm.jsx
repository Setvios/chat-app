import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../api/messages';

export default class InputForm extends Component {

	createMessage(event) {
		event.preventDefault();

		const message = event.currentTarget.newMessage.value

		Meteor.call('newMessage', message)

		event.currentTarget.newMessage.value = '';
	}

	render() {
		return (
			<div className="input-form-container">
				<form className="input-form" onSubmit={this.createMessage.bind(this)} >
					<input
						name="newMessage"
						type="text"
						placeholder="Type your message.."
						required
					/>
				</form>
			</div>
		);
	}
}