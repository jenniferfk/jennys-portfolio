import React from 'react'
import Desktopnav from '../navbars/desktopnav.tsx'
import Home from '../pages/Home.tsx';
import About from '../pages/About.tsx';
import Education from '../pages/Education.tsx';
import Projects from '../pages/Projects.tsx';
import '../pages/pages.css';

export default function Desktop() {
  return (
    <>
    <Desktopnav/>
    <div className='ml-8'>
    <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      </div>
    </>
  )
}
