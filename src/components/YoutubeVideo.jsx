import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 0;
	margin: 2rem 0;
	position: relative;
	padding-bottom: 56.25%;
	width: 100%;
`;

const Iframe = styled.iframe`
	border: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export default function({ videoId }) {
	return (
		<Container>
			<Iframe
				src={
					'https://www.youtube-nocookie.com/embed/' +
					videoId +
					'?rel=0&amp;showinfo=0'
				}
				frameborder="0"
				allow="autoplay; encrypted-media"
				allowfullscreen
			/>
		</Container>
	);
}
