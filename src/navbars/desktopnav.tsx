import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import githubLogo from '../data/pics/github-logo.png';
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Desktopnav() {
  return (
    <div>
      <nav className="w-full fixed h-12 bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
          <div className="githublogo  left-8">
            <a href="https://github.com/jenniferfk">
                <img src={githubLogo} alt="GitHub" width="35" height="35"/>
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link to="#" onClick={() => scrollToSection('home')} className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link to="#" onClick={() => scrollToSection('about')} className="text-white hover:text-gray-400">
              About
            </Link>
            <Link to="#" onClick={() => scrollToSection('education')} className="text-white hover:text-gray-400">
              Education
            </Link>
            <Link to="#" onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-400">
              Projects
            </Link>
            
          </div>
          <div>
            Download CV
          </div>
        </div>
      </nav>
    </div>
  );
}
