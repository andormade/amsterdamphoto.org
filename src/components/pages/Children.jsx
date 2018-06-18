import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage
		title="Children photography"
		description="Photographing children is definitely not an easy task. It requires some patience and understanding..."
		image="children/kids1.jpg"
	>
		<h2> Children photography </h2>
		<p>
			Photographing children is definitely not an easy task. Sometimes it requires a lot of patience and understanding. 
			I photograph birthdays, cake smashes, themed mini sessions (Christmas, costumes) and events. I work confidently in my home studio in Haarlem just as much as on-location. 
			Contact me for more information on prices and availability.
		</p>
		<Photo file="children/kids1.jpg" />
		<Photo file="children/kids2.jpg" />
		<Photo file="children/kids3.jpg" />
		<Photo file="children/kids4.jpg" />
		<Photo file="children/kids5.jpg" />
		<Photo file="children/kids6.jpg" />
		<Photo file="children/kids7.jpg" />
		<Photo file="children/kids8.jpg" />
		<Photo file="children/kids9.jpg" />
		<Photo file="children/kids11.jpg" />
		<Photo file="children/kids12a.jpg" />
		<Photo file="children/kids12b.jpg" />
		<Photo file="children/kids13.jpg" />
		<Photo file="children/kids14.jpg" />
		<Photo file="children/kids15.jpg" />

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
