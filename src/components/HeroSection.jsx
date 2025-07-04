import Lottie from "lottie-react";
import workAnimation from "../../public/mainpicture.json";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const bulletPoints = [
    "Web developer and hackathon enthusiast",
    "Currently interning at VigyanLabs, Mysore",
    "Solved 300+ DSA problems across LeetCode and GFG",
    "5+ hackathon wins across state and college levels",
    "Focus on building secure, high-performance ReactJS applications",
    "Actively upskilling to stay ahead in tech",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 text-white">
      <div className="grid grid-cols-1 md:grid-cols-10 items-center justify-between gap-12 max-w-7xl w-full">
        {/* Text Section */}
        <motion.div
          ref={ref}
          className="md:col-span-6 text-center md:text-left space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
  variants={childVariants}
>
  <span className="block text-gray-300 mb-2">Hey! I’m</span>
  <span className="relative inline-block">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
      Saharsh Patil
    </span>
    <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-pink-500 rounded-full animate-pulse" />
  </span>
  <span className="text-4xl md:text-5xl ml-2">👋</span>
</motion.h1>

          {/* Bullet Point Section */}
          <motion.ul
            className="text-white-200 text-lg leading-relaxed p-6 rounded-xl bg-grey/30 backdrop-blur-sm border border-slate-700/80 shadow-lg list-disc list-inside space-y-2 text-gray-300"
            variants={containerVariants}
          >
            {bulletPoints.map((point, index) => (
              <motion.li key={index} variants={childVariants}>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div variants={childVariants}>
            <a
              href="#contact"
              className="inline-block text-white text-lg font-semibold px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch &rarr;
            </a>
          </motion.div>
        </motion.div>

        {/* Lottie Animation Section */}
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Lottie animationData={workAnimation} loop={true} />
        </motion.div>
      </div>
    </section>
  );
}
