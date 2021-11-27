import React from "react";
import "./Hero.scss";
import ReactRoatingText from "react-rotating-text";
import heroImage from "../../assets/images/svg/coder.svg";
import { CSSTransition } from "react-transition-group";

const Hero = (props) => (
	<div className="heroContainer">
		<div className="portfolio-container hero-contents">
			<div className="hero-text">
				<p className="hero-text-eyebrow">Hi, I am</p>
				<p className="hero-text-heading">Brian Trang</p>
				<p className="hero-text-job">
					<ReactRoatingText items={["Full Stack Engineer", "Web Developer"]} />
				</p>
				<a
					className="hero-social-icon"
					href="https://www.linkedin.com/in/brian-trang-912704119/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa fa-linkedin"></i>
				</a>
				<a className="hero-social-icon" href="https://github.com/briantrang" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-github"></i>
				</a>
				<a className="hero-social-icon" href="briantrang@ymail.com" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-envelope"></i>
				</a>
			</div>
			<div className="hero-image-container">
				<CSSTransition in={true} appear={true} timeout={3000} classNames="fade">
					<img className="hero-image" src={heroImage} alt="hero" />
				</CSSTransition>
			</div>
		</div>
	</div>
);
export default Hero;
