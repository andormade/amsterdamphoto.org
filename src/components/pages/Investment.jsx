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
			<br />My session prices start from 90 Eur. I created several package options which are completely customizable for your needs. Feel free to send me a message to get my extended price & package guide. 
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
