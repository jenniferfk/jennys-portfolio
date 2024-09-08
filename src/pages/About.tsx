import React from 'react'
import './pages.css';
import selfPic from '../data/pics/self-pic5.png';
export default function About() {

  return (
    <div className="about container px-6">
      <h1 className="text-2xl font-bold title text-purple-500 mt-16">About Me</h1>
      <div className="sm:flex ml-auto mr-10 justify-center">
        <div>
        <img src={selfPic} alt="pict" className="sm:mr-16 rounded-full mt-4" />
        </div>
            <div className="sm:w-2/5 mt-6 ml-6">
              <p className="font-bold text-xl text-purple-800">A curiosity-driven Front-End Developer  </p>
              <p className='text-gray-600'>
              I thrive on tackling challenges and finding innovative solutions to enhance user interactions. My approach combines creativity with technical skill, allowing me to build applications that are both functional and visually appealing.
              </p> <br/>
              <p className='text-gray-600'>
                After my 3 years of  <span className=' font-bold text-purple-500'>Computer Science</span>, I am currently going into my masters in <span className=' font-bold text-purple-500'>Software Engineering</span> in <span className='text-purple-500'>CNAM</span> Liban. 
              </p><br/>
              <p className='text-gray-600'>I'm at my best when I'm working on projects and learning new languages or new ways of improving my coding skills. I thrive on the excitement of <b>solving challenges </b>and pushing the boundaries of what's possible. Currently, I'm focused on <b>growing my expertise</b> and delivering innovative solutions that make a real impact.</p>
            </div>
        </div>
    </div>
  )
}
