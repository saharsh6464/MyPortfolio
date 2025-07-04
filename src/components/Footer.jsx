export default function Footer() {
  return (
    <footer className="w-full bg-[#0e0e10] border-t border-white/10 text-gray-400 py-6 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 px-4 w-full">
        <p className="text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Saharsh Patil. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/saharsh-patil-254981293"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SaharshPatil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="mailto:saharsh.patil121@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
