import React from "react";
import "./Hero.scss";
import ReactRoatingText from "react-rotating-text";
import heroImage from "../../assets/images/svg/coder.svg";

const Hero = (props) => (
	<div className="heroContainer">
		<div className="portfolio-container hero-contents">
			<div className="hero-text">
				<p className="hero-text-eyebrow">Hi, I am</p>
				<p className="hero-text-heading">Brian Trang</p>
				<p className="hero-text-job">
					<ReactRoatingText items={["Full Stack Developer"]} />
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
				<img className="hero-image" src={heroImage} alt="hero" />
			</div>
		</div>
	</div>
);
export default Hero;
