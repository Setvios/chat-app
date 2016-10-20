import React, { Component, PropTypes } from 'react';
import Meteor from 'meteor/meteor';

export default class RenderMessage extends Component {
	render() {
		return (
			<div className="message-container">
				<div className="text-container">
					{this.props.message.text}
				</div>					
			</div>
		);
	}
}

RenderMessage.propTypes = {
	message: PropTypes.object,
};
