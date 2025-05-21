import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#e0e7ff] to-[#f8fafc] dark:from-gray-900 dark:to-gray-800 flex items-center px-6 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="text-5.5xl font-bold bg-gradient-to-r from-orange-300 to-cyan-400 bg-clip-text text-transparent">
              NOOR REHMAN
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            I am a{" "}
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              <Typewriter
                words={["Frontend Developer", "React Specialist", "UI/UX Designer"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            I design and develop modern, responsive websites using React and Tailwind CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8"
          >
            <a href="#contact">
  <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-green-400 hover:from-green-700 hover:to-blue-600 transition text-white rounded-full font-semibold flex items-center gap-2 shadow-lg">
    Contact Me <FaArrowRight />
  </button>
</a>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="/myphoto.png"
            alt="My Photo"
            className="w-[300px] md:w-[400px] rounded-full shadow-2xl object-cover border-4 border-black dark:border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
