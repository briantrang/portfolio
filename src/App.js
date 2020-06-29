import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Hero from './components/Hero/Hero'
import SectionHeader from './components/SectionHeader/SectionHeader'
import Services from './components/Services/Services'

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
      <SectionHeader 
        title="Some of my Projects"
        content="Below are some of the projects that I've worked on."
      />
    </div>
  );

}

export default App;
