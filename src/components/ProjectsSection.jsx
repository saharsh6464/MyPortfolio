import React from "react";

const projects = [
  {
    title: "AI Proctoring Tool",
    description:
      "An AI-powered exam proctoring solution that ensures academic integrity using face detection and behavior analysis.",
    liveLink: "#", // Add deployed link here
    readmeLink: "#",
  },
  {
    title: "QR Attendance System",
    description:
      "A secure, fast, and paperless attendance system using QR codes, adopted by multiple institutions.",
    liveLink: "https://aesthetic-lamington-726b8f.netlify.app/",
    readmeLink: "https://github.com/saharsh6464/Readme-Attendance-system.git",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site! Built with React, Tailwind, and cool animations to showcase my work and skills.",
    liveLink: "#",
    readmeLink: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="py-24 px-6 md:px-12 bg-transparent flex flex-col items-center"
      id="projects"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
        Projects & Highlights
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#181c2f] border border-[#2c304a] rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-pink-500/20 hover:scale-[1.03] cursor-pointer block"
          >
            <div>
              <h3 className="text-2xl font-bold text-pink-400 group-hover:text-pink-300 mb-3 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.readmeLink && (
                <a
                  href={project.readmeLink}
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()} // stops click bubbling on mobile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  View Project ReadMe →
                </a>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
