import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import App from '../imports/ui/components/App';
import MainLayout from '../imports/ui/layouts/MainLayout';
import EditProfile from '../imports/ui/pages/EditProfile';

import '../imports/startup/accounts-config';

FlowRouter.route('/', {
	name: 'chat',
	action() {
		mount(MainLayout, {
			content: (<App />) // TODO Stas: Chat
		});
	}
});

FlowRouter.route('/profile', {
	name: 'profile',
	action() {
		mount(MainLayout, {
			content: (<EditProfile />)
		});
	}
});
