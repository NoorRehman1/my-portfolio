import React from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white pt-16 pb-8 transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-yellow-400">
              About Us
            </h3>
            <p className="text-gray-600 dark:text-white/70">
              Creating beautiful digital experiences with passion. Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-white/70">
              <li><a href="#" className="hover:text-[#432DD7] dark:hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#432DD7] dark:hover:text-yellow-300 transition">About</a></li>
              <li><a href="#projects" className="hover:text-[#432DD7] dark:hover:text-yellow-300 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#432DD7] dark:hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
        <div>
  <h3 className="text-xl font-bold mb-4 dark:text-yellow-400">Contact</h3>
  <ul className="space-y-3 text-gray-600 dark:text-white/70">
    <li className="flex items-center gap-2">
      <FiMail className="text-[#432DD7] dark:text-yellow-400" />
      noorreehman90@gmail.com
    </li>
    <li className="flex items-center gap-2">
      <FiPhone className="text-[#432DD7] dark:text-yellow-400" />
      +92 700242351
    </li>
  </ul>
</div>


          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 dark:text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <FiGithub />, link: "https://github.com/NoorRehman1" },
                { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/noorkhan01/" },
                { icon: <FiTwitter />, link: "#" },
                { icon: <FiInstagram />, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-2xl text-gray-600 dark:text-white/70 hover:text-[rgb(67,45,215)] dark:hover:text-yellow-400 transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center"
        >
          <p className="text-lg mb-4 text-gray-700 dark:text-yellow-400">
            Designed & Developed with care
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Noor Rehman. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
