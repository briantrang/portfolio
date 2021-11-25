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
			</div>
			<div class="hero-image-container">
				<img className="hero-image" src={heroImage} alt="hero" />
			</div>
		</div>
	</div>
);

export default Hero;
