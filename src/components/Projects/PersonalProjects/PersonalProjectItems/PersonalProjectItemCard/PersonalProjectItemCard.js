import React from "react";
import "./PersonalProjectItemCard.scss";

const PersonalProjectItemCard = (props) => {
	//Generate individual cards for each personal project
	return (
		<>
			<div className="project-item-container">
				<div className="project-item-content">
					<div className="project-item-type">
						<img className="project-item-img-type" src={props.imgType} alt="" /> {props.type}
					</div>
					<div className="project-item-title">{props.title}</div>

					<div className="project-item-description">{props.description}</div>
					<div className="project-item-link">
						<a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
							View Code <i className="fas fa-code"></i>
						</a>
					</div>
					<div className="project-item-link">
						<a href={props.demoUrl} target="_blank" rel="noopener noreferrer">
							View Demo <i className="fas fa-laptop-code"></i>
						</a>
					</div>
				</div>
				<div className="project-item-img-content">
					<img className="project-item-img" src={props.image} alt="" />
				</div>
			</div>
		</>
	);
};

export default PersonalProjectItemCard;
