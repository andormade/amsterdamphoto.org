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
			<PrettyLink
				to="/blog/2017/09/12/photo-walk-amsterdam-haarlem"
				title="Photo walks"
				color="black"
				background="white"
				image="home/1.jpg"
			>
				<Photo file="home/1.jpg" />
			</PrettyLink>


		<PrettyLink
			to="/couple_shoots"
			title="Romantic couple sessions"
			color="white"
			background="black"
			image="home/2.jpg"
		>
			<Photo file="home/2.jpg" />
		</PrettyLink>


		<PrettyLink
			to="/couple_shoots"
			title="Engagement & pre-wedding sessions"
			color="white"
			background="black"
			image="home/3.jpg"
		>
			<Photo file="home/3.jpg" />
		</PrettyLink>

			<PrettyLink
				to="/portraits"
				title="Beautiful magazine-like portraits"
				color="black"
				background="white"
				image="home/4.jpg"
			>
				<Photo file="home/4.jpg" />
			</PrettyLink>

		<PrettyLink
			to="/couple_shoots"
			title="Engagement & pre-wedding sessions"
			color="white"
			background="black"
			image="home/5.jpg"
		>
			<Photo file="home/5.jpg" />
		</PrettyLink>


		<PrettyLink
			to="/couple_shoots"
			title="Romantic flower field couple session"
			color="white"
			background="black"
			image="home/6.jpg"
		>
			<Photo file="home/6.jpg" />
		</PrettyLink>

			<PrettyLink
			to="/bridal_beauty"
			title="Beautiful styled bridal portraits"
			color="white"
			background="black"
			image="home/7.jpg"
		>
			<Photo file="home/7.jpg" />
		</PrettyLink>


		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
