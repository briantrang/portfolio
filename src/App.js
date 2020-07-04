import React, { useEffect, useState } from 'react'
import database  from './firebase'
import axios from 'axios'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Hero from './components/Hero/Hero'
import SectionHeader from './components/SectionHeader/SectionHeader'
import SectionHeaderBGImage from './components/SectionHeader/SectionHeaderBGImage/SectionHeaderBGImage'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'

function App() {

  const [sectionHeader, setSectionHeader] = useState([]);
  const [sectionHeaderBGImage, setSectionHeaderBGImage] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [resume, setResume] = useState([]);
    
useEffect(() => {
    const databaseUrl = database.ref();
    axios.get(databaseUrl + ".json")
      .then(res => {
        setSectionHeader(res.data.sectionHeader);
        setSectionHeaderBGImage(res.data.sectionHeaderBGImage);
        setServices(res.data.services);
        setProjects(res.data.projects);
        setResume(res.data.resume);
      })
      .catch(err =>{
        console.log(err);
      });
},[]);
  
    return (
      <div>
        <Toolbar />
        <Hero />
        
        <SectionHeader 
          title={sectionHeader.title}
          content={sectionHeader.content}
          subContentHeading={sectionHeader.subcontentHeading}
        />
        <Services servicesContent={services}/>
        <SectionHeaderBGImage
          title={sectionHeaderBGImage.title}
          content={sectionHeaderBGImage.content}
          background={sectionHeaderBGImage.background}
        />
        <Projects projectsContent={projects}/>
        <Resume 
          title={resume.title}
          description={resume.description}
          link={resume.link}
        />
        <Footer />
      </div>
    );
  

}

export default App;
