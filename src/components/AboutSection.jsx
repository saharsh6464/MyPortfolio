import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="py-16 px-6">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* 🔤 Text Section */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-400">Saharsh Patil</span>,
            a passionate developer currently interning at VigyanLabs, Mysore.
            I'm pursuing <strong>Computer Science and Engineering</strong> at
            The National Institute of Engineering (NIE), Mysore,{" "}
            <strong>Batch of 2027</strong>.
          </p>

          <p className="text-gray-400 mt-4 text-base">
            With 300+ DSA problems solved across <strong>LeetCode</strong> and{" "}
            <strong>GFG</strong>, I specialize in building{" "}
            <strong>clean, secure ReactJS applications</strong> with smooth UI
            animations. Having won 5+ hackathons, I thrive in collaborative,
            fast-paced environments and actively upskill to stay ahead in tech.
          </p>

          {/* 🌐 Social Links (smaller buttons) */}
          <div className="mt-6 flex flex-wrap gap-3 text-white text-sm">
            <a
              href="https://www.linkedin.com/in/saharsh-patil-254981293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-blue-500/20 transition"
            >
              <FaLinkedin className="text-blue-400 text-lg" />
              LinkedIn
            </a>

            <a
              href="https://github.com/saharsh6464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-gray-300/10 transition"
            >
              <FaGithub className="text-gray-200 text-lg" />
              GitHub
            </a>

            <a
              href="https://leetcode.com/saharshpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-yellow-400/10 transition"
            >
              <SiLeetcode className="text-yellow-400 text-lg" />
              LeetCode
            </a>

            <a
              href="https://auth.geeksforgeeks.org/user/saharshpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-green-400/10 transition"
            >
              <SiGeeksforgeeks className="text-green-400 text-lg" />
              GFG
            </a>
          </div>
        </div>

        {/* 🖼️ Image */}
        <div className="relative z-10 flex justify-center md:justify-end">
          <div className="bg-white/10 p-2 rounded-2xl shadow-inner border border-white/10 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="/pictures.jpg"
              alt="Saharsh Patil"
              className="rounded-xl w-[300px] h-[300px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
