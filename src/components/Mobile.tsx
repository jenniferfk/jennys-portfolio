import React from 'react'
import MobileNav from '../navbars/mobilenav.tsx'
import Home from '../pages/Home.tsx'
import About from '../pages/About.tsx'
import Education from '../pages/Education.tsx'
import Projects from '../pages/Projects.tsx'
import './mobileview.css';
export default function Mobile() {
  return (
    <>
    <MobileNav/>
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
