'use client' // 👈 use it here

import { useState } from 'react';
import Image from "next/image";
import projects from './projects.json';

export default function Home() {
  const uniqueCategories = new Set(projects.map(project => project.category));
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <>
      <main className="main-flex">
        <div className="header-logo text-sm">
          <div className="fixed-head lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://quilibrium.space"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo.png"
                alt="Quilibrium Logo"
                className="dark:invert"
                width={200}
                height={24}
                priority
              />
            </a> <div className="header"><b>Space</b></div>&nbsp;Beta
          </div>
          <header>
            <nav className="container mx-auto flex justify-between">
              <ul className="header-menu">
                <li><a href="/">Home</a></li>
                <li><a href="https://docs.quilibrium.space">Docs</a></li>
                <li><a href="https://quilibrium.com/docs">Learn</a></li>
                <li><a href="https://quilibrium.com/labs">Build</a></li>
                <li><a href="https://form.jotform.com/241954100243042">Send Project</a></li>
              </ul>
            </nav>
          </header>
        </div>

      <div className="content-container">
        <div className="filter">CATEGORIES: 
  <span className="filter-category"  onClick={() => setSelectedCategory('')} style={{cursor: 'pointer', textDecoration: 'underline'}} >All</span>
  {[...uniqueCategories].map((category, index) => (
    <span 
      key={index} 
      className="filter-category" 
      onClick={() => handleCategoryClick(category)} 
      style={{cursor: 'pointer'}}
    >
      {category}
    </span>
  ))}
</div>


          <div className="cards-container">
            {filteredProjects.map((project, index) => (
              <div key={index} className="card">
                <div className="flex">
                  <img src={project.image} alt={`${project.title} Logo`} className="p-logo" />
                  <h3 className="card-title">
                    <a href={project.titleUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </h3>
                </div>
                <p className="card-content">{project.content}</p>
                <span className="card-category">{project.category}</span>
                <div className="card-links">
                {project.links && Array.isArray(project.links) && project.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">
                      <img src={link.image} alt={link.alt} className="p-social-logo" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">Made with ❤️ by <b><a href="https://www.quilibrium.com" className="group">Quilibrium</a> </b>Lovers</div>
      </main>
    </>
  );
}