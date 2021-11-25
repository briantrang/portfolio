import React from "react";
import "./NavigationItem.scss";

const NavigationItem = (props) => (
	<>
		{!props.mobile && (
			<li className={props.button ? "nav-item nav-button" : "nav-item"}>
				<a href={props.link}>{props.children}</a>
			</li>
		)}
		{props.mobile && (
			<li className="nav-mobile-item">
				<a href={props.link}>{props.children}</a>
			</li>
		)}
	</>
);

export default NavigationItem;
