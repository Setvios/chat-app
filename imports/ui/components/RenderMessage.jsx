import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

export default class RenderMessage extends Component {

	render() {
		const {message, usersOnline} = this.props;
		const isAuthorOnline = usersOnline.find(
			user => user._id === message.userId && user.username === message.username
		);
		const isAuthorOnlineClass = classnames(
			'username-wrap',
			{'authorOffline': !isAuthorOnline,
			'authorOnline': isAuthorOnline,
			}
		);
		return (
			<div className="message-container">
				<div className={isAuthorOnlineClass}>
					{message.username}:
					<br />
					{ isAuthorOnline ? <p className="p-online">online</p> : <p className="p-offline">offline</p> }
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
