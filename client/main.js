import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import MainLayout from '../imports/ui/layouts/MainLayout';
import { Header } from '../imports/ui/components/App';
import { App } from '../imports/ui/components/App';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<App />)
		});
	}
});
