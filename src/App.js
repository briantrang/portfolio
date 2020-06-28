import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Hero from './components/Hero/Hero'
import SectionHeader from './components/SectionHeader/SectionHeader'

function App() {
  return (
    <div>
      <Toolbar />
      <Hero />
      <SectionHeader 
        title="Hi, I am Brian."
        content="I'm a passionate Web Developer who loves to learn how different websites are designed and built. 
        I enjoy looking at how some websites are built and seeing how I would build them as well as improve upon them."
      />
    </div>
  );

}

export default App;
