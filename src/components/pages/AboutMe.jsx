import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';
import YoutubeVideo from '../YoutubeVideo';

export default () => (
	<TextPage title="About me">
		<YoutubeVideo videoId="954Q33_2t9c" />

		<p>Hi!</p>

		<p>
			My name is Annie, I am Hungarian couple & lifestyle photographer
			living in Amsterdam.
			<br />My style is clean, airy and bright with a romantic touch. If
			this is what you're looking for, I'm happy to send you my package &
			information guide.
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
