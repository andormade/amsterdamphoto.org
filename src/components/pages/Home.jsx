import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import PhotoSet from '../PhotoSet';
import CallToActionButton from '../CallToActionButton';
import PrettyLink from '../PrettyLink';

export default () => (
	<AlbumPage
		title="Portrait &amp; Lifestyle Photography in Amsterdam"
		image="home/1.jpg"
		permalink="/"
	>
		
		<Photo file="home/1.jpg" />
		<Photo file="home/2.jpg" />
		<Photo file="home/3.jpg" />
		<Photo file="home/4.jpg" />
		<Photo file="home/5.jpg" />
		<Photo file="home/6.jpg" />
		<Photo file="home/7.jpg" />

	

		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
