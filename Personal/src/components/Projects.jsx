// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A cool project that I worked on using React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Another awesome project with amazing features.",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
