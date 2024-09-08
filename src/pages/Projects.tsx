import React from 'react';
import { projects } from '../data/interfaces/projects.ts';
import './pages.css';
import './carousel.css';

export default function Projects() {
  return (
    <div className="container mx-auto mt-12 px-6">
      <div className="flex justify-center pt-32">
        <h1 className="text-4xl font-bold title md:mt-16 text-white">Projects</h1>
      </div>
      <div className="projects-list p-8 md:p-24">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row items-start justify-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } mb-16`}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0"
            />
            <div
              className="ml-0 md:ml-4 flex flex-col justify-center self-center text-white text-center md:text-left max-w-full md:max-w-1/2"
            >
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.articleUrl}
                className="text-blue-500 mt-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
