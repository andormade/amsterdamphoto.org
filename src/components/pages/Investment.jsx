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
		<Photo file="investment/amsterdam.jpg" alt="Boudoir photography" />
		<p>
		If you would like to know more about my prices and services, feel free to email me and get my extended price & package guide. 
		</p>
		<p>Qestions, booking: mail@anniekostolany.com</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
