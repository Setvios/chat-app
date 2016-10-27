import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from '../imports/ui/layouts/MainLayout';
import { Header } from '../imports/ui/components/App';
import App from '../imports/ui/components/App';
import EditProfile from '../imports/ui/pages/EditProfile'

import '../imports/startup/accounts-config';


FlowRouter.route('/', {
	name: 'chat',
	action() {
		mount(MainLayout, {
			content: (<App />)
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
