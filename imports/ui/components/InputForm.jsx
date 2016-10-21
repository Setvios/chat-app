import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Messages } from '../../api/messages';

export default class InputForm extends Component {

	createMessage(event) {
		event.preventDefault();

		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		if (!text.length) return;

		Meteor.call('newMessage', text)

		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	render() {
		return (
			<div className="input-form-container">
				<form className="input-form" onSubmit={this.createMessage.bind(this)} >
					<input
						type="text"
						ref="textInput"
						placeholder="Type your message.."
					/>
				</form>
			</div>
		);
	}
}