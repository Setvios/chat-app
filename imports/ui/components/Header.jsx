import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper';

class Header extends Component {	
	render() {
		const { isUser } = this.props;
		console.log(isUser);
		return (
			<div className="header-container">
				<a className="logo" href="/">Chat App</a>
				<ul className="nav">
					<li>
						{ isUser ? <a href='/profile' className="profile-redirect">Edit Profile</a> : '' }
					</li>
					<li>
						<AccountsUIWrapper />
					</li>					
				</ul>
			</div>
		);
	}
}

Header.propTypes = {
	isUser: PropTypes.bool,
}

export default createContainer(() => {

	return {
		isUser: !!Meteor.user(),
	 };	
}, Header);
