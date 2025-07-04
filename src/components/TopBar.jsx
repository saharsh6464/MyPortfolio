export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
        {/* 🔗 Centered Navigation */}
        <nav className="flex gap-8">
          
          <a
            href="#projects"
            className="text-blue-400 font-medium hover:text-pink-400 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#awards"
            className="text-blue-400 font-medium hover:text-pink-400 transition duration-200"
          >
            Awards
          </a>
          <a
            href="#about"
            className="text-blue-400 font-medium hover:text-pink-400 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-blue-400 font-medium hover:text-pink-400 transition duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
