import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.scss";

const NavigationItems = (props) => (
	<>
		{!props.mobile && (
			<ul className="nav-items">
				<NavigationItem link="#about-me">
					<span>About Me</span>
				</NavigationItem>
				<NavigationItem link="#experience">
					<span>Experience</span>
				</NavigationItem>
				<NavigationItem link="#projects">
					<span>Projects</span>
				</NavigationItem>
				<NavigationItem link="#contact">
					<span>Contact Me</span>
				</NavigationItem>
			</ul>
		)}
		{props.mobile && (
			<ul className="nav-mobile-items">
				<NavigationItem link="#about-me" mobile>
					<span>About Me</span>
				</NavigationItem>
				<NavigationItem link="#experience" mobile>
					<span>Experience</span>
				</NavigationItem>
				<NavigationItem link="#projects" mobile>
					<span>Projects</span>
				</NavigationItem>
				<NavigationItem link="#contact" mobile>
					<span>Contact Me</span>
				</NavigationItem>
			</ul>
		)}
	</>
);

export default NavigationItems;
