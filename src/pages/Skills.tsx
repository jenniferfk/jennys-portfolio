import React from 'react'
import { skills } from '../data/interfaces/skills.ts'

export default function Skills() {
  return (
    <div className="skills pt-20 container px-6">
        <h1 className="text-4xl font-bold title mt-16 text-white  ">Skills</h1>
        <div className='title mt-6 text-gray-600'>
            <p>
                Skills that I learned and practiced either in university or at internships:
            </p>
        </div>
      <div className="sm:flex ml-auto mr-10 justify-center">
        <div className="skills-grid grid grid-cols-2 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4 sm:mb-10">
            {skills.map((skill) => (
                <div key={skill.name} className="skill-item flex flex-col items-center sm:mr-20 text-gray-500">
                    <skill.Component />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}
