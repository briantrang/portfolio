import React from "react";
import "./NavigationItem.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavigationItem = (props) => (
	<>
		{!props.mobile && (
			<li className="nav-item">
				<AnchorLink offset="100" href={"/" + props.link}>
					{props.children}
				</AnchorLink>
			</li>
		)}
		{props.mobile && (
			<li className="nav-mobile-item">
				<AnchorLink offset="100" href={"/" + props.link}>
					{props.children}
				</AnchorLink>
			</li>
		)}
	</>
);

export default NavigationItem;
