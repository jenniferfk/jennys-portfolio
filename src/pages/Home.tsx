import React from 'react'
import flowerpic from '../data/pics/flower1.png'
export default function Home() {
  return (
        <div className="homeintro text-white"id="home">
          <img src={flowerpic} alt="pict" className="flowerpic2 mt-8 absolute w-2/12 hidden sm:block"/>
          <div className=" justify-center items-center">
          <div className="descdiv text-center pt-20 sm:pt-40 pb-28">
                <p className="text-2xl">Welcome to my Portfolio! I'm Jennifer Kamel,</p>
                <p className="webdev font-bold w-100 text-anim">Web and Software Developer</p>
                <p className="text-lg mt-5">Technology, for me, is more than just a tool—it's a catalyst for positive change. <br/>Here, you'll find a glimpse into my journey, projects, and aspirations.</p>
          </div>
        </div>
        </div>
  )
}
/*
        <div className="picdiv ml-auto mr-10">
            <img src={selfPic} alt="pict" className="selfpic rounded-3xl mt-4" />
        </div>
        */
