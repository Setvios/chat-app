import React, {Component, PropTypes} from 'react';

export default class RenderMessage extends Component {

	render() {
		const {message, usersOnline} = this.props;
		const isAuthorOnline = usersOnline.find(
			user => user._id === message.userId && user.username === message.username
		);
		return (
			<div className="message-container">
				<div className="username-wrap">
					{message.username}:
					<br />
					{ isAuthorOnline ?
						<p>online</p> : <p className="offline">offline</p>
					}
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
	usersOnline: PropTypes.array.isRequired,
};
