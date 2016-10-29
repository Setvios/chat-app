import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class InputForm extends Component {

	createMessage(e) {
		e.preventDefault();

		let formValue = e.currentTarget.newMessage.value;

		Meteor.call('newMessage', formValue, (err) => {
			if (err) console.error(err.reson);

			formValue = '';
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