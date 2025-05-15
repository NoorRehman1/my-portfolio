import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store with cart functionality, payment gateway integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      links: {
        github: "https://github.com/yourusername/ecommerce",
        live: "https://yourstore.example.com"
      }
    },
    {
      title: "Portfolio CMS",
      description: "Custom WordPress theme with Gutenberg blocks for creative professionals to showcase their work.",
      technologies: ["WordPress", "PHP", "SCSS", "GSAP"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      links: {
        github: "https://github.com/yourname/portfolio-cms",
        live: "https://portfolio.example.com"
      }
    },
    {
      title: "Task Management App",
      description: "Kanban-style productivity application with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      links: {
        github: "https://github.com/yourname/task-manager",
        live: "https://tasks.example.com"
      }
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are some of my featured works. Each project comes with detailed case studies.
        </p>

        {/* Project Showcase */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Project Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={prevProject}
                  className="p-2 bg-white/80 rounded-full shadow hover:bg-white transition"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={nextProject}
                  className="p-2 bg-white/80 rounded-full shadow hover:bg-white transition"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
              <p className="text-gray-600 mb-6">{projects[activeProject].description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={projects[activeProject].links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                  <FiGithub className="mr-2" /> Code
                </a>
                <a
                  href={projects[activeProject].links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(index)}
              className={`bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all hover:shadow-lg ${
                activeProject === index ? "ring-2 ring-indigo-500" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;