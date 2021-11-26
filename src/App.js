import React, { useEffect, useState, Suspense } from "react";
import database from "./firebase";
import axios from "axios";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Hero from "./components/Hero/Hero";

//Lazy loading components
const SectionHeader = React.lazy(() => import("./components/SectionHeader/SectionHeader"));
const SectionHeaderBGImage = React.lazy(() =>
	import("./components/SectionHeader/SectionHeaderBGImage/SectionHeaderBGImage")
);

const Projects = React.lazy(() => import("./components/Projects/Projects"));
const PersonalProjects = React.lazy(() => import("./components/Projects/PersonalProjects/PersonalProjects"));
const Resume = React.lazy(() => import("./components/Resume/Resume"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
	//database states
	const [sectionHeader, setSectionHeader] = useState([]);
	const [sectionHeaderBGImage, setSectionHeaderBGImage] = useState([]);
	const [services, setServices] = useState([]);
	const [projects, setProjects] = useState([]);
	const [resume, setResume] = useState([]);
	const [personalProjects, setPersonalProjects] = useState([]);

	//call database and get data
	useEffect(() => {
		const databaseUrl = database.ref();
		axios
			.get(databaseUrl + ".json")
			.then((res) => {
				setSectionHeader(res.data.sectionHeader);
				setSectionHeaderBGImage(res.data.sectionHeaderBGImage);
				setServices(res.data.services);
				setProjects(res.data.projects);
				setResume(res.data.resume);
				setPersonalProjects(res.data.personalProjects);
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
				<Resume title={resume.title} description={resume.description} link={resume.link} />
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<div className="alt-background">
					<SectionHeader
						eyebrow="Projects"
						heading="Work Experience"
						body="Below are some of the projects that I've worked on."
					/>
				</div>
			</Suspense>

			{/* <Suspense fallback={<p>Loading...</p>}>
				<Services servicesContent={services} />
			</Suspense> */}

			<Suspense fallback={<p>Loading...</p>}>
				<SectionHeaderBGImage
					title={sectionHeaderBGImage.title}
					content={sectionHeaderBGImage.content}
					background={sectionHeaderBGImage.background}
				/>
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<Projects projectsContent={projects} />
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<SectionHeader
					title={personalProjects.title}
					content={personalProjects.content}
					subContentHeading={personalProjects.subcontentHeading}
				/>
				<PersonalProjects />
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<Contact />
			</Suspense>

			<Suspense fallback={<p>Loading...</p>}>
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
