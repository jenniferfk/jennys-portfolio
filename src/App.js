import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Desktopnav from './navbars/desktopnav.tsx'
import MobileNav from './navbars/mobilenav.tsx'
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Education from './pages/Education.tsx';
import flowerpic from './data/pics/flower2.png'
import Skills from './pages/Skills.tsx';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-serif">
        {isMobile ? 
        <MobileNav/> 
        : 
        <Desktopnav/>
        } 
        <div>
            <div id="home"className="background-section">
              <Home />
            </div>
            <img src={flowerpic} alt="pict"className="flowerpic w-1/2 sm:w-2/12 ml-auto sm:mr-10"/>

            <div id="about">
              <About />
            </div>

            <div id="skills"className="background-section2">
              <Skills />
            </div>
            <div id="education">
              <Education />
            </div>
            <div id="projects"className="background-section3">
              <Projects />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto"> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
