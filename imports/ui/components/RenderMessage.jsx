import React, { Component, PropTypes } from 'react';
import Meteor from 'meteor/meteor';

export default class RenderMessage extends Component {
	render() {
		const { message } = this.props;
		return (
			<div className="message-container">
				<div className="username-wrap">
					{message.username}:				
				</div>
				<div className="text-container">
					{message.text}
				</div>
			</div>
		);
	}
}

RenderMessage.propTypes = {
	message: PropTypes.object,
};
