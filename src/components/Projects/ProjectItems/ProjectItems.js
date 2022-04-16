import React from "react";
import "./ProjectItems.scss";

const ProjectItems = (props) => (
	<div className="project-item-card card">
		<img className="project-image card-img-top" src={props.background} alt="Company BG" />
		<div className="project-content card-body">
			<div className="project-company-name">{props.companyName}</div>
			<div className="project-company-info">{props.aboutCompany}</div>
			<button className="project-company-link">
				<a href={props.companyLink} target="_blank" rel="noopener noreferrer">
					View Website <span className="chevron"></span>
				</a>
			</button>
		</div>
	</div>
);

export default ProjectItems;
