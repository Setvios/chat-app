import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class InputForm extends Component {

	createMessage(e) {
		e.preventDefault();

		const form = e.currentTarget;
		const text = form.newMessage.value;

		Meteor.call('newMessage', text, (err) => {
			if (err) console.error(err.reson);

			form.newMessage.value = '';
		});
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