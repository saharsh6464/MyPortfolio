import './App.css';
import Footer from './components/Footer.jsx';
import './index.css';
import GetInTouch from './components/GetInTouch.jsx';
import HeroSection from './components/HeroSection.jsx';
import TopBar from './components/TopBar.jsx';
import Particles from './components/Particles.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import AwardsSection from './components/AwardsSection.jsx';
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import astronautAnim from "../public/astronaut.json";
import jupiterAnim from "../public/jupiter.json";
import RotatingImageOrbit from './components/RotatingImageOrbit.jsx';
import AboutSection from './components/AboutSection.jsx';

function App() {
  return (
    <>
      {/* Particles background layer */}
      <div className="particles-container" style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: window.innerWidth < 768 ? "100vw" : "200vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={window.innerWidth < 768 ? 200 : 400}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={window.innerWidth < 768 ? 50 : 100}
          moveParticlesOnHover={window.innerWidth >= 768}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Astronaut */}
      <motion.div
        style={{
          position: "absolute",
          top: "3%",
          right: "5%",
          width: window.innerWidth < 768 ? 100 : 180,
          height: window.innerWidth < 768 ? 100 : 180,
          pointerEvents: "none",
        }}
        animate={{ y: [0, 20, 0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Lottie animationData={astronautAnim} loop={true} />
      </motion.div>

      {/* Jupiter */}
      <motion.div
        style={{
          position: "absolute",
          top: "15%",
          left: window.innerWidth < 768 ? "5%" : "35%",
          width: window.innerWidth < 768 ? 80 : 140,
          height: window.innerWidth < 768 ? 80 : 140,
          pointerEvents: "none",
        }}
        animate={{ y: [0, -15, 0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Lottie animationData={jupiterAnim} loop={true} />
      </motion.div>

      <TopBar />
      
      {/* Tight spacing between sections */}
      <main className="space-y-8 md:space-y-10">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="awards">
          <AwardsSection />
        </section>

        <section>
          <RotatingImageOrbit />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <GetInTouch />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;