import React from "react";
import "./Projects.scss";
import ProjectItems from "./ProjectItems/ProjectItems";

const Projects = (props) => {
	var projectsArr = [];
	projectsArr = props.projectsContent;
	return (
		<div className="portfolio-container">
			<div className="project-content">
				{projectsArr.map((item, i) => {
					return (
						<ProjectItems
							key={i}
							background={item.companyLogo}
							aboutCompany={item.aboutCompany}
							companyLink={item.companyLink}
							companyName={item.companyName}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
