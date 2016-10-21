import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper';

export class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<ul className="nav">
					<li>
						<a className="logo" href="/">Chat App</a>
					</li>
					<li>
						<button className="editButton">Edit Profile</button>
					</li>
					<li>
						<AccountsUIWrapper />
					</li>					
				</ul>
			</div>
		);
	}
}
