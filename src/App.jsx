import './App.css'
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
import Masonry from './components/RotatingImageOrbit.jsx';
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
        width: "200vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Astronaut - top right, big (now scrolls with page) */}
      <motion.div
        style={{
          position: "absolute",
          top: "3%",
          right: "5%",
          width: 220,
          height: 220,
          pointerEvents: "none",
        }}
        animate={{ y: [0, 30, 0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Lottie animationData={astronautAnim} loop={true} />
      </motion.div>
      {/* Jupiter - left middle, big (now scrolls with page) */}
      <motion.div
        style={{
          position: "absolute",
          top: "12%",
          left: "40%",
          width: 160,
          height: 160,
          pointerEvents: "none",
        }}
        animate={{ y: [0, -25, 0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Lottie animationData={jupiterAnim} loop={true} />
      </motion.div>
      < TopBar />
      <div id="hero">
        <HeroSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="awards">
        <AwardsSection />
      </div>

      <RotatingImageOrbit />

      <div id="about">
        <AboutSection />
      </div>

      <div id="contact">
        <GetInTouch />
      </div>

      {/* Add more content here */}
      {/* <section style={{ minHeight: "1200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2 className="text-3xl text-white">More cool stuff goes here...</h2>
      </section> */}

      <Footer />
    </>
  )
}

export default App
