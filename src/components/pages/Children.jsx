import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage
		title="Children photography"
		description="Capturing the best moments of a kid's life in definitely not an easy task. It requires some patience and understanding..."
		image="children/kids1.jpg"
	>
		<h2> Children photography </h2>
		<p>
			Capturing the best moments of a kid's life in definitely not an easy
			task. It requires some patience and understanding. I believe that no
			matter how much energy a child has, it is always possible to achieve
			good results with them. I'll happily photograph birthdays, cake
			smashes, themed mini sessions (Christmas, costumes) and events. I
			have my own home-studio in Haarlem but I am flexible on the
			location. Contact me for more information on prices and
			availability.
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
