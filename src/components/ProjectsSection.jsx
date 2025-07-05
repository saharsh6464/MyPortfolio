import React from "react";
import { FiExternalLink, FiGithub, FiAward } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiThreedotjs } from "react-icons/si";

const projects = [
  {
    title: "AI Proctex",
    description: "AI-powered proctoring platform ensuring fairness in online coding assessments.",
    highlights: ["Live face/voice detection", "Tab-switch restrictions", "Dual-camera surveillance"],
    liveLink: "#",
    codeLink: "#",
    tags: ["React", "Firebase", "AI"],
    icon: <FaReact className="text-blue-400" />,
    awards: ["Best Innovation Award"]
  },
  {
    title: "Smart Attendance",
    description: "Secure attendance system using dynamic QR codes and geolocation.",
    highlights: ["QR generation", "Geolocation validation", "Session security"],
    liveLink: "https://aesthetic-lamington-726b8f.netlify.app/",
    codeLink: "https://github.com/saharsh6464/Readme-Attendance-system.git",
    tags: ["React", "Node.js", "MongoDB"],
    icon: <SiJavascript className="text-yellow-400" />,
    awards: ["Best Innovation Award"]
  },
  {
    title: "Space Portfolio",
    description: "Immersive space-themed portfolio with 3D animations.",
    highlights: ["Three.js visuals", "Framer Motion", "Tailwind CSS"],
    liveLink: "#",
    codeLink: "https://github.com/saharsh6464/MyPortfolio.git",
    tags: ["React", "Three.js", "Tailwind"],
    icon: <SiThreedotjs className="text-purple-400" />,
    awards: []
  },
  {
    title: "News Generator",
    description: "News aggregation website with real-time updates.",
    highlights: ["NewsAPI integration", "Responsive UI", "Category filters"],
    liveLink: "#",
    codeLink: "#",
    tags: ["React", "NewsAPI", "JavaScript"],
    icon: <SiHtml5 className="text-orange-400" />,
    awards: []
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 md:py-20 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            My <span className="text-pink-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Featured work combining technical skills with innovative solutions
          </p>
        </div>

        <div className="grid gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20 hover:border-pink-400/30"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-pink-300">
                    {project.title}
                  </h3>
                  {project.awards.length > 0 && (
                    <div className="flex items-center mt-1 gap-1 text-xs text-yellow-400">
                      <FiAward className="text-xs" />
                      <span>{project.awards[0]}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-pink-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                {project.liveLink !== "#" ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs sm:text-sm text-blue-400 hover:text-blue-300"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                ) : (
                  <span className="text-xs text-gray-500">Demo coming soon</span>
                )}
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm text-gray-400 hover:text-white"
                >
                  <FiGithub className="mr-1" /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Want to see more of my work?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/saharsh6464"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/10"
            >
              <FiGithub className="mr-2" />
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/saharsh-patil-254981293"
              target="_blank"
              rel="noopener noreferrer"
             className="inline-flex items-center px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/10"
            >
              <FiExternalLink className="mr-2" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}