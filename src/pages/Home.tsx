import React from 'react'
import selfPic from '../data/pics/self-pic4.png';

export default function Home() {
  return (
    <section id="home">
        <div className="homeintro flex text-white mt-16">
          <div className="flex justify-center items-center ml-auto">
            <div className="descdiv text-center">
                <p className="text-2xl">Welcome to my Portfolio! I'm Jennifer Kamel,</p>
                <p className="webdev font-bold w-100 text-anim">Web and Software Developer</p>
                <p className="text-lg mt-5">Technology, for me, is more than just a tool—it's a catalyst for positive change. <br/>Here, you'll find a glimpse into my journey, projects, and aspirations.</p>
          </div>
        </div>
        <div className="picdiv ml-auto mr-10">
            <img src={selfPic} alt="pict" className="selfpic rounded-3xl mt-4" />
        </div>
        </div>
    </section>
  )
}
