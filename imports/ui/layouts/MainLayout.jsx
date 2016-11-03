import React from 'react';
import DocumentMeta from 'react-document-meta';

import Header from '../components/Header';

export default function MainLayout({ content }) {
	const meta = {
		title: 'Chat App',
		description: 'Simple chatting app',
		meta: {
			charset: 'utf-8',
			name: {
				keywords: 'react,meta,document,html,tags',
			}
		}
	};

	return (
		<div className="layout-container">
			<DocumentMeta {...meta} />
			<Header />
			<div className="content-container">
				{content}
			</div>			
		</div>
	);
}
