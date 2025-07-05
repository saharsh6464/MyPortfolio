import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 sm:px-6 md:py-16">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-xl md:rounded-2xl border border-white/10 shadow-lg md:shadow-2xl overflow-hidden">
        {/* Text Section */}
        <div className="relative z-10 order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold text-white mb-4 md:mb-6">
            About Me
          </h2>

          <div className="space-y-3 md:space-y-4">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm{" "}
              <span className="font-semibold text-blue-400">Saharsh Patil</span>,
              a passionate developer currently interning at VigyanLabs, Mysore.
            </p>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm pursuing <strong>Computer Science and Engineering</strong> at
              The National Institute of Engineering (NIE), Mysore,{" "}
              <strong>Batch of 2027</strong>.
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
              With 300+ DSA problems solved across <strong>LeetCode</strong> and{" "}
              <strong>GFG</strong>, I specialize in building{" "}
              <strong>clean, secure ReactJS applications</strong> with smooth UI
              animations.
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
              Having won 5+ hackathons, I thrive in collaborative,
              fast-paced environments and actively upskill to stay ahead in tech.
            </p>
          </div>

          {/* Social Links - Stacked on mobile */}
          <div className="mt-6 grid grid-cols-2 sm:flex flex-wrap gap-2 sm:gap-3">
            <a
              href="https://www.linkedin.com/in/saharsh-patil-254981293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-blue-500/20 transition text-sm sm:text-base"
            >
              <FaLinkedin className="text-blue-400 text-lg" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/saharsh6464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-gray-300/10 transition text-sm sm:text-base"
            >
              <FaGithub className="text-gray-200 text-lg" />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/saharshpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-yellow-400/10 transition text-sm sm:text-base"
            >
              <SiLeetcode className="text-yellow-400 text-lg" />
              <span>LeetCode</span>
            </a>

            <a
              href="https://auth.geeksforgeeks.org/user/saharshpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 hover:bg-green-400/10 transition text-sm sm:text-base"
            >
              <SiGeeksforgeeks className="text-green-400 text-lg" />
              <span>GFG</span>
            </a>
          </div>
        </div>

        {/* Image - On top for mobile */}
        <div className="relative z-10 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <div className="bg-white/10 p-1 sm:p-2 rounded-xl md:rounded-2xl shadow-inner border border-white/10 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <img
              src="/pictures.jpg"
              alt="Saharsh Patil"
              className="rounded-lg md:rounded-xl w-full max-w-[250px] sm:max-w-[300px] h-auto aspect-square object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}