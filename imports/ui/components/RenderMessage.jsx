import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class RenderMessage extends Component {

	render() {
		const {message} = this.props;
		return (
			<div className="message-container">
				<div className="username-wrap">
					{message.username}:
				</div>
				<div className="text-container">
					{message.text}
					<p>{message.timestamp}</p>
				</div>
			</div>
		);
	}
}

RenderMessage.propTypes = {
	message: PropTypes.object.isRequired,
};
