import React, { useEffect } from 'react'
import { skills } from '../data/interfaces/skills.ts'
import './pages.css';
export default function About() {
  
  useEffect(() => {
    const skillsContainer = document.querySelector('.skillsContainer');
    if (!skillsContainer) return; 

    skillsContainer.innerHTML = '';

    let skillRow: HTMLElement | null = null;
    const screenWidth = window.innerWidth;
    const skillsPerRow = screenWidth < 768 ? 2 : 3;

    skills.forEach((skill, index) => {
      if (index % skillsPerRow === 0) {
        skillRow = document.createElement('div');
        skillRow.classList.add('skill-row', 'flex', 'justify-center', 'w-full', 'mb-4');
        skillsContainer.appendChild(skillRow);
      }
      const skillDiv = document.createElement('div');
      skillDiv.classList.add(
        'mx-2', 'my-1', 'p-2', 'bg-purple-500', 'text-white', 'rounded-full', 
        'text-center', 'flex-shrink-0', 'w-full', 'sm:w-1/2', 'md:w-1/3', 'lg:w-1/4'
      );
      
      skillDiv.textContent = skill.name;
      skillRow?.appendChild(skillDiv);
    });
  }, []);

  return (
    <div className="about container mt-12 px-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-purple-500">About Me</h1>
        <div className="flex-grow border-t border-purple-500 ml-4"></div>
      </div>

      <div className="aboutdesc flex text-white justify-center items-center ">
                <div className="natdob w-1/3"> 
                    <p>Nationality: Lebanese</p>
                    <p>Date Of Birth: 18/09/2002</p>
                </div>
                <div>
                    <ul className="list-none">Languages:
                        <li className="list-disc">Arabic: Native Language, Excellent Spoken & Written.</li>
                        <li className="list-disc">French: Excellent Spoken & Written.</li>
                        <li className="list-disc">English: Excellent Spoken & Written.</li>
                    </ul>
                </div>
      </div>
      <div className="text-white justify-center items-center mt-6 text-xl">
                <p className="text-center">Skills</p>
                <div className="skillsContainer text-white justify-center mt-4"></div>
            </div>
            
    </div>
  )
}
