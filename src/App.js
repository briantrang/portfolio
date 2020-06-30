import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Hero from './components/Hero/Hero'
import SectionHeader from './components/SectionHeader/SectionHeader'
import SectionHeaderBGImage from './components/SectionHeader/SectionHeaderBGImage/SectionHeaderBGImage'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'


function App() {
  return (
    <div>
      <Toolbar />
      <Hero />
      <SectionHeader 
        title="Hi, I am Brian."
        content="I am an experienced Web Developer with a demonstrated history of working in a client-facing environment. 
        I am skilled in WordPress, Shopify, HTML, CSS, and JavaScript. 
        I am also currently learning and improve my skills in ReactJS and React Native. 
         By the way, this site was built from scratch in ReactJS."
        subContentHeading="Below are qualities I implement into all websites I work on."
      />
      <Services />
      <SectionHeaderBGImage
        title="Some of my Work Experience"
        content="Below are some of the projects that I've worked on."
        background="https://images.pexels.com/photos/2764711/pexels-photo-2764711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Projects />
    </div>
  );

}

export default App;
