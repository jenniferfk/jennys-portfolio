import { useEffect, useState } from 'react';
import './App.css';
import Mobile from './components/Mobile.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';
import Desktop from './components/Desktop.tsx';
import Projects from './pages/Projects.tsx';
import Education from './pages/Education.tsx';

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
        {isMobile ? <Mobile /> : <Desktop />} 
        <div className="flex-1 overflow-y-auto"> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
