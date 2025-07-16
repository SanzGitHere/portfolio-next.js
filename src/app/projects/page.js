'use client';

import Image from 'next/image';
import '../../styles/projects.css';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      img: '/images/Clothing Store.png',
      title: 'Online Clothing Store',
      desc: 'web-based platform designed to provide customers with a seamless shopping experience for a wide variety of clothing.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      github: 'https://github.com/SanzGitHere/Online-Clothing-Store',
    },
    {
      img: '/images/Event Management.png',
      title: 'Event Management',
      desc: 'Manages event ticket bookings. This project uses core concepts of Data Structures and Algorithms (DSA) such as arrays, queues, and linked lists to handle event programs and customer bookings.',
      tech: ['C++', 'Data Structures'],
      github: 'https://github.com/SanzGitHere/Event-Management-System',
    },
    {
      img: '/images/Food App Image.png',
      title: 'Android Food App',
      desc: 'Platform for food ordering, management, and delivery, tailored for both administrators and registered users.​',
      tech: ['Android', 'XML', 'SQLite', 'Java', 'Kotlin'],
      github: 'https://github.com/SanzGitHere/Food-App',
    },
    {
      img: '/images/Leaf Diesease.png',
      title: 'Leaf Disease Detection',
      desc: 'A smart agriculture solution built with Python, CNN, and real-time image classification for disease identification that can be used for future via web or mobile apps.',
      tech: ['Python', 'ML Algorithm', 'Image Processing'],
      github: 'https://github.com/SanzGitHere/Leaf-Disease-Detection',
    },
    {
      img: '/images/Mini App Store.png',
      title: 'Mini App Store',
      desc: 'Mini App Store UI built with HTML, CSS, and JavaScript featuring interactive sections for Games, Movies, and Apps. Fully responsive and beginner-friendly frontend project.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      github: 'https://github.com/SanzGitHere/Mini-AppStore',
    },
    {
      img: '/images/Portfolio.png',
      title: 'My Sample Portfolio',
      desc: 'A responsive personal portfolio website to showcase my skills, projects, and services with light/dark mode support and smooth UI/UX.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/SanzGitHere/my-portfolio',
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    // === Keyboard arrow support ===
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKey);

    // === Marquee animation speed setup ===
    const marquees = document.querySelectorAll('.marquee-content');
    marquees.forEach((marquee) => {
      const contentWidth = marquee.scrollWidth;
      const speed = 80; // pixels per second
      const duration = contentWidth / speed;
      marquee.style.animationDuration = `${duration}s`;
    });

    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex]);

  return (
    <main className="main-content">
      <div className="project-wrapper">
        <div
          className="chevron chevron-left"
          id="prevBtn"
          onClick={prevProject}
          role="button"
          tabIndex={0}
        >
          <i className="fas fa-circle-chevron-left"></i>
        </div>

        <div className="project-content">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-section ${idx === activeIndex ? 'active' : ''}`}
              style={{ display: idx === activeIndex ? 'block' : 'none' }}
            >
              <Image src={project.img} alt={project.title} width={600} height={400} />
              <h2>{project.title}</h2>
              <p className="desc">{project.desc}</p>

              <div className="tech-marquee">
                <div className="marquee-content">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>

              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                Check Here
              </a>
            </div>
          ))}
        </div>

        <div
          className="chevron chevron-right"
          id="nextBtn"
          onClick={nextProject}
          role="button"
          tabIndex={0}
        >
          <i className="fas fa-circle-chevron-right"></i>
        </div>
      </div>
    </main>
  );
}
