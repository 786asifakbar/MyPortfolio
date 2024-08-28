// src/components/Projects.jsx
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
    {
      title: "Project Three",
      description: "Another awesome project with amazing features.",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className=" h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-t from-gray-600 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
              <p className="mb-6">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
