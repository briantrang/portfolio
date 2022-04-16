import React, { useState, useEffect } from "react";
import "./PersonalProjects.scss";
import axios from "axios";
import database from "../../../firebase";
import PersonalProjectItemCard from "./PersonalProjectItems/PersonalProjectItemCard/PersonalProjectItemCard";

const PersonalProjects = (props) => {
	const [projectItem, setProjectItem] = useState([]);
	const [activeTab, setActiveTab] = useState("react");

	//Get project items
	useEffect(() => {
		const databaseUrl = database.ref();
		axios
			.get(databaseUrl + ".json")
			.then((res) => {
				setProjectItem(res.data.personalProjects.items);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	//filter out projectItems based off searchValue

	let filteredItems = projectItem.filter((item) => {
		return item.type === activeTab;
	});

	const initialTypes = projectItem.map((item) => {
		return item.type;
	});

	const types = initialTypes.filter((item, index) => {
		return initialTypes.indexOf(item) === index;
	});

	//create variable to render conditionally
	let projectCards;

	//conditionally render the projectCards based on if the search finds a match or not
	//if match is found, render cards, else, render error message
	if (filteredItems.length !== 0) {
		projectCards = (
			<div>
				{filteredItems.map((item, i) => {
					return (
						<PersonalProjectItemCard
							key={i}
							image={item.image}
							title={item.title}
							imgType={item.imgType}
							type={item.type}
							description={item.description}
							demoUrl={item.demoUrl}
							githubUrl={item.githubUrl}
							className="cardSize"
						/>
					);
				})}
			</div>
		);
	} else {
		projectCards = <h1 className="text-center p-2">Sorry no items matches your search. Try Again.</h1>;
	}

	return (
		<>
			<div className="portfolio-container">
				<div className="project-tabs">
					{types.map((type, index) => (
						<button
							className={type === activeTab ? "project-button active" : "project-button"}
							key={index}
							active={activeTab === type}
							onClick={() => setActiveTab(type)}
						>
							{type}
						</button>
					))}
				</div>
				{projectCards}
			</div>
		</>
	);
};

export default PersonalProjects;
