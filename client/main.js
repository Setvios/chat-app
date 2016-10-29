import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Chat from '../imports/ui/pages/Chat';
import MainLayout from '../imports/ui/layouts/MainLayout';
import EditProfile from '../imports/ui/pages/EditProfile';

import '../imports/startup/accounts-config';

FlowRouter.route('/', {
	name: 'chat',
	action() {
		mount(MainLayout, {
			content: (<Chat />) // TODO Stas: Chat
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
