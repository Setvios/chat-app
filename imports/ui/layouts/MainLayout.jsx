import React from 'react';
import { Header } from '../components/Header';

export default function MainLayout({ content }) {
	return (
		<div className="layout-container">
			<Header />
			<div className="content-container">
				{content}
			</div>			
		</div>
	);
}
