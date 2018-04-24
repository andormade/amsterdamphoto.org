import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage
		title="Investment"
		description="Rates, packages & information."
		image="investment/amsterdam.jpg"
	>
		<Photo
			file="investment/amsterdam.jpg"
			alt="Boudoir photography"
		/>
		<p>
			<br />Send me a message to get my extended price & package guide. 
			My sessions start at 90 Eur.
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
