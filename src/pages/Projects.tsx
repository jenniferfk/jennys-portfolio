import React, { useEffect } from 'react'
import {projects} from '../data/interfaces/projects.ts'
import './pages.css';
import './carousel.css'
export default function Projects() {
  useEffect(() => {
    const carousel = document.querySelector<HTMLUListElement>(".carousel");
    const arrowBtns = document.querySelectorAll<HTMLElement>(".wrapper i");
    const wrapper = document.querySelector<HTMLDivElement>(".wrapper");

    if (!carousel || !wrapper) return;

    const firstCard = carousel.querySelector<HTMLLIElement>(".card");
    const firstCardWidth = firstCard?.offsetWidth || 0;

    let isDragging = false;
    let startX: number | null = null;
    let startScrollLeft: number | null = null;

    const dragStart = (e: MouseEvent) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e: MouseEvent) => {
      if (!isDragging || !startX || !startScrollLeft) return;
      const newScrollLeft = startScrollLeft - (e.pageX - startX);
      if (newScrollLeft <= 0 || newScrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
        isDragging = false;
        return;
      }
      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    if (carousel) {
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
    }

    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (carousel) {
          carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        }
      });
    });

    return () => {
      if (carousel) {
        carousel.removeEventListener("mousedown", dragStart);
        carousel.removeEventListener("mousemove", dragging);
        document.removeEventListener("mouseup", dragStop);
      }
      arrowBtns.forEach(btn => {
        btn.removeEventListener("click", () => {
          if (carousel) {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
          }
        });
      });
    };

  }, []);
  return (
    <div className="container mt-12 px-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-purple-500">Projects</h1>
        <div className="flex-grow border-t border-purple-500 ml-4"></div>
      </div>
      <div id='tipsntricks' className='text-center bgfaq'>
      <div id='tipscarousel'>
        <div className="wrapper mb-6">
          <i id="left" className="fa-solid fas fa-angle-left text-white bg-purple-500">&lt;</i>
          <ul className="carousel">
            {projects.map((project, index) => (
              <li key={index} className="card text-center">
                <div className="img">
                  <img src={project.imageUrl} alt="" draggable="false" />
                </div>
                <h3 className="articletitle font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <span onClick={() => window.location.href = project.articleUrl}>Go to Github</span>
              </li>
            ))}
          </ul>
          <i id="right" className="fa-solid fas fa-angle-right text-white bg-purple-500">&gt;</i>
        </div>
      </div>
    </div>
      
    </div>
  )
}
