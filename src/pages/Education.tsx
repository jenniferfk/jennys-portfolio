import React, { useEffect } from 'react'
import './pages.css';
import { certificateData } from '../data/interfaces/certificates.ts';
export default function Education() {
  useEffect(() => {
    const certificateContainer = document.getElementById('certificates');
    if (!certificateContainer) return;

    certificateContainer.innerHTML = ''; 

    certificateData.forEach(certificate => {
      const certDiv = document.createElement('div');
      certDiv.classList.add('certifdiv', 'flex', 'hover:bg-purple-900', 'hover:bg-opacity-60', 'rounded', 'mb-10');

      const certImageContainer = document.createElement('div');
      certImageContainer.classList.add('w-2/5', 'flex', 'justify-center');
      const certImage = document.createElement('img');
      certImage.src = certificate.image;
      certImage.alt = certificate.alt;
      certImage.classList.add('w-48', 'h-auto', 'rounded-md', 'border-2');
      certImageContainer.appendChild(certImage);

      const certContent = document.createElement('div');
      certContent.classList.add('w-4/5');
      const certTitle = document.createElement('h5');
      certTitle.classList.add('text-lg');
      certTitle.innerHTML =` ${certificate.title} ━ ${certificate.issuer} <span className="arrowspan">➚</span>`;
      const certDesc = document.createElement('p');
      certDesc.classList.add('certifparagraph', 'text-base');
      certDesc.innerHTML = certificate.desc;

      certContent.appendChild(certTitle);
      certContent.appendChild(certDesc);

      certDiv.appendChild(certImageContainer);
      certDiv.appendChild(certContent);

      const certLink = document.createElement('a');
      certLink.href = certificate.link;
      certLink.classList.add('nolink');
      certLink.appendChild(certDiv);

      certificateContainer.appendChild(certLink);
    });
  }, []);
  return (
    <div className="container mt-12 px-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-purple-500">Education</h1>
        <div className="flex-grow border-t border-purple-500 ml-4"></div>
      </div>
      <div className="text-white mt-8">
      <div className="collegediv ml-4 sm:ml-8 md:ml-16">
          <div className="text-3xl mb-6 font-extrabold">College</div>
          <div id="college" className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start">
      <div className="years ml-12 sm:text-left sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">2021 ━━ Present</div>
      <div className="eduparagraph sm:w-3/4">
        <h5 className="text-lg">Computer Science ━ CNAM Nahr Ibrahim</h5>
        <p>My coursework has covered a wide range of computer science topics, including Data Structures, Algorithms, Web Development (HTML, CSS, JS, PHP), Python, Java, & Database Courses (MySQL, PL/SQL...).</p>
        <p>These courses have equipped me with a solid understanding of fundamental concepts and practical coding skills.</p>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-start">
      <div className="years ml-12 sm:text-left sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">2020 ━━ 2021</div>
      <div className="eduparagraph sm:w-3/4">
        <h5 className="text-lg">BioChemistry ━ Lebanese University Fanar</h5>
        <p>Completed 60 credits.</p>
        <p>My coursework has encompassed a wide range of subjects, including Cytology, Histology, Anatomy, Genetic, Ecology, Geology, Chemistry, and many more courses.</p>
      </div>
    </div>
          </div>
        </div>
      </div>

      <div className="text-white mt-16">
        <div className="certificatesdiv ml-4 sm:ml-8 md:ml-16">
          <div className="text-3xl mr-8 font-extrabold">Certificates</div>
          <div className="flex flex-col sm:flex-row items-start">
      <div className="years text-sm ml-12 sm:text-left sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">Feb 2024 ━━ May 2024</div>
              <div className="eduparagraph sm:w-3/4">
                <h5 className="text-lg">Eurisko Academy</h5>
                <h6 className='text-purple-200'>React JS and React Native Certification with 3.9 GPA </h6>
                  <p className='ml-2'> - Acquired comprehensive knowledge in building user interfaces using React JS and React Native.</p>
                  <p className='ml-2'> - Mastered state management with Redux and Context API.</p>
                  <p className='ml-2'> - Developed server-side rendered applications with Next.js.</p>
                  <p className='ml-2'> - Integrated and utilized Maps, Camera, and many other functionalities in React Native projects.</p>
                  <p className='ml-2'> - Handled authentication & authorization processes using given APIs.</p> 
                  <p className='ml-2'> - Optimized applications for better performance.</p>
              </div>
            </div>
        </div>
      </div>

      <div className=" text-white justify-center items-center">
          <div className="certificatesdiv ml-4 sm:ml-8 md:ml-16">
                <div className="text-3xl mr-8 mt-16 font-extrabold">Online Certificates</div>
        <div id="certificates" className="mt-16 ml-16 ">
        </div>
            </div></div>
    </div>
  )
}