import { useState } from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Blinkit Clone",
    description:
      "A full-stack grocery delivery platform inspired by Blinkit. Features secure authentication, product browsing, category filtering, shopping cart, order management, admin dashboard, and responsive UI built with the MERN stack.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Tailwind CSS",
      "Cloudinary",
    ],
    github: "https://github.com/ridhamguptaprogramming-ops/WhatsApp-2",
    live: "https://whatsapp-4-nyet.onrender.com/",
  },

  {
    id: "02",
    title: "Uber Clone",
    description:
      "A real-time ride-booking application with separate User and Captain dashboards. Includes live location tracking, Google Maps integration, Socket.io for real-time communication, authentication, ride booking, and responsive design.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Google Maps API",
      "JWT",
      "Tailwind CSS",
    ],
    github: "#",
    live: "#",
  },

  {
    id: "03",
    title: "Frontend Showcase",
    description:
      "A collection of premium animated frontend experiences featuring modern UI/UX, GSAP animations, Framer Motion, Three.js effects, responsive layouts, and interactive designs inspired by top creative websites.",
    tech: [
      "React",
      "GSAP",
      "Framer Motion",
      "Three.js",
      "CSS",
      "Vite",
      "Swiper",
      "Lenis",
    ],
    github: "#",
    live: "#",
  },

  {
    id: "04",
    title: "WhatsApp Clone",
    description:
      "A real-time messaging application with instant chat, online user status, authentication, responsive interface, media sharing support, and Socket.io powered communication for seamless conversations.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/ridhamguptaprogramming-ops/WhatsApp-2",
    live: "https://whatsapp-4-nyet.onrender.com/",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="projects">
      <div className="projects-preview">
        <div className="preview-card">
          <h4>Preview</h4>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.description}</p>
          <div className="preview-tech">
            {activeProject.tech.slice(0, 5).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="preview-links">
            <a href={activeProject.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href={activeProject.live} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="projects-top">

        <span className="tag">
          Featured Projects
        </span>

        <h2>
          Work that speaks
          <br />
          for itself
        </h2>

        <p>
          A selection of projects that showcase my expertise in full-stack
          development and modern architecture.
        </p>

      </div>

      <div className="project-list">

        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onMouseEnter={() => setActiveProject(project)}
            onFocus={() => setActiveProject(project)}
            tabIndex={0}
          >

            <span className="project-label">
              ★ Flagship Project
            </span>

            <div className="project-heading">

              <h3>{project.id}</h3>

              <h1>{project.title}</h1>

            </div>

            <p className="description">
              {project.description}
            </p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="buttons">

              <a href={project.github}>
                <FaGithub />
                GitHub
              </a>

              <a href={project.live}>
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}