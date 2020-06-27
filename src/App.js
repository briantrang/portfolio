import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div>
      <Toolbar />
      <Hero />
    </div>
  );

}

export default App;
