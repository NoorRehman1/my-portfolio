import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiServer, FiCloud } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";

const AboutWithSkills = () => {
 const skills = [
  {
    icon: <FiCode size={32} />,
    name: "Frontend Dev",
    desc: "HTML5, CSS3, JavaScript",
  },
  {
    icon: <FiLayout size={32} />,
    name: "UI Frameworks",
    desc: "Bootstrap, Tailwind CSS",
  },
  {
    icon: <FiCloud size={32} />,
    name: "Firebase",
    desc: "Auth, Firestore, Hosting",
  },
  {
    icon: <FiSmartphone size={32} />,
    name: "Responsive Design",
    desc: "React , Flex/Grid",
  },
  {
    icon: <FiDatabase size={32} />,
    name: "WordPress ",
    desc: "Themes, Plugins, Elementor",
  },
  {
    icon: <FiServer size={32} />,
     name: "Databases",
    desc: "MySQL, SQL",
  },

];


  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg text-center"
              >
                <div className="text-indigo-600 dark:text-yellow-400 mb-3 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{skill.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* About Me */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              About <span className="text-indigo-600 dark:text-yellow-400">Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Hello! I'm Noor Rehman.</strong> With experience in web development, I specialize in crafting responsive, accessible, and high-performance digital products.
              </p>

              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500 dark:border-yellow-400">
                <h4 className="font-bold text-indigo-700 dark:text-yellow-400 mb-2">My Journey:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Frontend Developer at Craft Solution (May–Aug 2024)</li>
                  <li>Wordpress Developer at IUSS (jan–may 2025)</li>
                  <li>Full-stack capable with MERN stack</li>
                </ul>
              </div>

              <p>
                When I'm not coding, I enjoy exploring new technologies, learning UI/UX trends, or solving real-world problems through code.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/noor-rehman-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <FaDownload /> Download CV
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-yellow-400 dark:border-yellow-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutWithSkills;
