import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiServer, FiCloud } from "react-icons/fi";

const AboutWithSkills = () => {
  const skills = [
    { icon: <FiCode size={32} />, name: "Frontend Dev", desc: "React, Next.js, Tailwind" },
    { icon: <FiLayout size={32} />, name: "UI/UX Design", desc: "Figma, Adobe XD" },
    { icon: <FiSmartphone size={32} />, name: "Mobile", desc: "React Native" },
    { icon: <FiDatabase size={32} />, name: "Backend", desc: "Node.js, MongoDB" },
    { icon: <FiServer size={32} />, name: "DevOps", desc: "Docker, AWS" },
    { icon: <FiCloud size={32} />, name: "CMS", desc: "WordPress, Strapi" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Skills Icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg  cursor-default text-center"
              >
                <div className="text-indigo-600 mb-3 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-gray-800">{skill.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - About Me */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-indigo-600">Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Hello! I'm [Your Name].</strong> With over [X] years of experience in web development, I specialize in creating beautiful, functional digital experiences.
              </p>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-700 mb-2">My Journey:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Frontend Developer @Company (2020-Present)</li>
                  <li>WordPress Expert with 50+ projects</li>
                  <li>Fullstack capabilities</li>
                </ul>
              </div>

              <p>
                When I'm not coding, you'll find me [hobby] or exploring new technologies in the ever-evolving web landscape.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Download CV
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutWithSkills;