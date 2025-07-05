import Lottie from "lottie-react";
import workAnimation from "../../public/mainpicture.json";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHoveringName, setIsHoveringName] = useState(false);

  const bulletPoints = [
    { text: "Web developer and hackathon enthusiast", emoji: "💻" },
    { text: "Currently interning at VigyanLabs, Mysore", emoji: "🏢" },
    { text: "Solved 300+ DSA problems across LeetCode and GFG", emoji: "🧠" },
    { text: "5+ hackathon wins across state and college levels", emoji: "🏆" },
    { text: "Focus on building secure, high-performance ReactJS applications", emoji: "⚡" },
    { text: "Actively upskilling to stay ahead in tech", emoji: "🚀" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { y: 10, opacity: 0 }, // Reduced y value for mobile
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100, // Softer spring for mobile
        damping: 10,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-12 pt-16 md:pt-24 text-white relative overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Fewer particles on mobile */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="hidden md:block absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
        
        {/* Mobile-optimized glow effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-purple-500/10 md:bg-purple-500/20 blur-xl md:blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full bg-blue-500/10 md:bg-blue-500/20 blur-xl md:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-10 items-center justify-between gap-8 md:gap-12 max-w-7xl w-full relative z-10">
        {/* Text Section - Full width on mobile */}
        <motion.div
          ref={ref}
          className="md:col-span-6 text-center md:text-left space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={childVariants}>
            <span className="block text-gray-300/90 mb-1 md:mb-2 text-sm md:text-lg tracking-wider font-mono">
              &lt;hello world&gt;
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            variants={childVariants}
          >
            <motion.span 
              className="relative inline-block"
              onHoverStart={() => setIsHoveringName(true)}
              onHoverEnd={() => setIsHoveringName(false)}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-lg md:drop-shadow-2xl text-4xl md:text-6xl">
                SAHARSH
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 md:h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                animate={{
                  scaleX: isHoveringName ? [1, 1.2, 1] : 1,
                  background: isHoveringName
                    ? "linear-gradient(to right, #06b6d4, #3b82f6, #6366f1)"
                    : "linear-gradient(to right, #06b6d4, #3b82f6)",
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -right-6 md:-right-8 top-0 text-2xl md:text-4xl"
                animate={{
                  rotate: isHoveringName ? [0, 15, -5, 0] : 0,
                  scale: isHoveringName ? [1, 1.2, 1.1, 1] : 1,
                }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }}
              >
  
              </motion.div>
            </motion.span>
            <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 drop-shadow-lg md:drop-shadow-2xl text-4xl md:text-6xl"
              animate={{
                textShadow: isHoveringName ? 
                  ["0 0 5px rgba(59, 130, 246, 0)", "0 0 10px rgba(59, 130, 246, 0.3)", "0 0 5px rgba(59, 130, 246, 0)"] : 
                  "0 0 0px rgba(0,0,0,0)"
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              PATIL
            </motion.span>
          </motion.h1>

          {/* Bullet Point Section - Simplified for mobile */}
          <motion.ul
            className="text-white-200 text-base md:text-lg leading-relaxed p-4 md:p-6 rounded-lg md:rounded-xl bg-gray-900/60 backdrop-blur-sm md:backdrop-blur-md border border-gray-700 shadow-lg md:shadow-2xl list-none space-y-2 md:space-y-3 text-gray-300 font-mono"
            variants={containerVariants}
          >
            {bulletPoints.map((point, index) => (
              <motion.li 
                key={index} 
                variants={childVariants}
                className="flex items-start"
                whileHover={{ 
                  x: 3,
                  color: "#ffffff"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="text-pink-400 mr-2 md:mr-3 mt-0.5 md:mt-1 text-lg md:text-xl">{point.emoji}</span>
                <span className="text-sm md:text-base">{point.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button - Adjusted for mobile */}
          <motion.div 
            variants={childVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="#contact"
              className="inline-block relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute inset-0 border border-transparent group-hover:border-white/30 rounded-full transition-all duration-300 group-hover:scale-105"></span>
              <span className="relative z-10 flex items-center text-white text-sm md:text-lg font-medium md:font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full transition-all duration-300 group-hover:translate-x-1 font-mono">
                <span className="mr-1 md:mr-2">$</span> 
                connect_with_me
                <span className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform duration-300">_</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Lottie Animation Section - Hidden on smallest screens */}
        <motion.div
          className="hidden sm:block md:col-span-4 relative"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1], 
            delay: 0.2 
          }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute -inset-2 md:-inset-4 bg-cyan-500/10 rounded-xl md:rounded-3xl blur-lg opacity-50"></div>
          <div className="relative">
            <Lottie 
              animationData={workAnimation} 
              loop={true} 
              className="w-full h-auto max-w-xs md:max-w-none drop-shadow-[0_5px_15px_rgba(34,211,238,0.2)] md:drop-shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
            />
          </div>
          <motion.div 
            className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-mono"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            npm run awesome
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}