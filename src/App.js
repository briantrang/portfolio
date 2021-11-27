import React, { useEffect, useState, Suspense } from "react";
import database from "./firebase";
import axios from "axios";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Hero from "./components/Hero/Hero";

//Lazy loading components
const SectionHeader = React.lazy(() => import("./components/SectionHeader/SectionHeader"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const Timeline = React.lazy(() => import("./components/Timeline/Timeline"));
const PersonalProjects = React.lazy(() => import("./components/Projects/PersonalProjects/PersonalProjects"));
const Resume = React.lazy(() => import("./components/Resume/Resume"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
	//database states
	const [timeline, setTimeline] = useState([]);
	const [projects, setProjects] = useState([]);
	const [resume, setResume] = useState([]);

	//call database and get data
	useEffect(() => {
		const databaseUrl = database.ref();
		axios
			.get(databaseUrl + ".json")
			.then((res) => {
				setTimeline(res.data.timeline);
				setProjects(res.data.projects);
				setResume(res.data.resume);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<Toolbar />
			<Hero />
			<Suspense fallback={<p>Loading...</p>}>
				<div id="#about-me" className="primary-background">
					<Resume title={resume.title} description={resume.description} link={resume.link} />
				</div>
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<div id="#experience" className="alt-background">
					<SectionHeader eyebrow="Clients" heading="Work Experience" body="Below are some of my clients." />
					<Projects projectsContent={projects} />
				</div>
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<div className="primary-background">
					<SectionHeader eyebrow="Milestones" heading="Timeline" body="A brief timeline of my experiences." />
					<Timeline timelineArray={timeline} />
				</div>
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<div id="#projects" className="alt-background">
					<SectionHeader
						eyebrow="Coding"
						heading="Personal Projects"
						body="Below are some of the projects I've done to improve as a developer."
					/>
					<PersonalProjects />
				</div>
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<div id="#contact" className="primary-background">
					<SectionHeader
						eyebrow=""
						heading="Get in Contact"
						body="Feel free to contact me so we can get a conversation going."
					/>
					<Contact />
				</div>
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
