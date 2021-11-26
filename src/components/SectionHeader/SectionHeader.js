import React from "react";
import "./SectionHeader.scss";

const SectionHeader = (props) => (
	<div className="portfolio-container">
		<div className="section-header-content">
			<div className="section-header-eyebrow">{props.eyebrow}</div>
			<div className="section-header-heading">{props.heading}</div>
			<div className="section-header-body">{props.body}</div>
		</div>
	</div>
);

export default SectionHeader;
