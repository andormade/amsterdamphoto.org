import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import { Facebook, Instagram, Messenger } from './SocialIcons';

const HeaderContainer =
 styled.header`
	background: #E6BE8A;
	margin: 0 auto;
	height: 46px;
	overflow: hidden;
	padding: 2px 0;

	width: 100%;
	z-index: 1000;

	&:after {
		clear: both;
		content: ' ';
		display: block;
	}

	@media (max-width: 900px) {
		// left: 0;
		// position: fixed;
		// right: 0;
		// top: 0;
	}
`;

const HorizontalMenu = styled.nav`
	display: block;
	padding: 0 40px;

	@media (max-width: 900px) {
		padding-top: 50px;
	}

	&:after {
		clear: both;
		content: ' ';
		display: block;
	}
`;

const MenuItem = styled(Link)`
	color: #ffffff;
	display: block;
	float: left;
	font-family: 'Open sans';
	height: 46px;
	line-height: 46px;
	padding: 0 15px;
	text-decoration: none;
	text-align: center;
`;

const Logo = styled(Link)`
	background-image: url(http://amsterdamphoto.org/images/logo_white.png);
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center center;
	color: rgba(0, 0, 0, 0);
	display: block;
	float: left;
	height: 46px;
	padding: 0 40px;

	@media (max-width: 800px) {
		display: block;
	}
`;

const MenuButton = styled.i`
	display: block;
	color: #ffffff;
	font-size: 24px;
	line-height: 46px;

	position: absolute;
	right: 40px;
	top: 0;

	@media (min-width: 901px) {
		display: none;
	}
`;

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false
		};
	}

	onMenuButtonClick = () => {
		this.setState(prevState => ({
			menuOpen: !prevState.menuOpen
		}));
	};

	render() {
		const headerStyle = this.state.menuOpen
			? {
					height: 'auto'
					//'box-shadow': '0 0 100px #000000'
				}
			: {};

		return (
			<HeaderContainer style={headerStyle}>
				<Logo to="/">Annie Kostolany Photography</Logo>
				<HorizontalMenu>
					<MenuItem to="/">Home</MenuItem>
					<MenuItem to="/about-me">About me</MenuItem>
					<MenuItem to="/investment">Investment</MenuItem>
					<MenuItem to="/bridal-beauty">Bridal Photography</MenuItem>
					<MenuItem to="/blog/2018/03/22/couple-sessions">Couple sessions</MenuItem>
					<MenuItem to="/children">Children</MenuItem>
					<MenuItem to="/blog">Blog</MenuItem>
					<Instagram />
					<Facebook />
					<Messenger />
				</HorizontalMenu>
				<MenuButton
					className="fas fa-bars"
					onClick={this.onMenuButtonClick}
				/>
			</HeaderContainer>
		);
	}
}
