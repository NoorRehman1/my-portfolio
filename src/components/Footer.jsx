import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart,  FiPhone, FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
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
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-pink-500 mr-2"
              >
                <FiHeart />
              </motion.span>
              About Us
            </h3>
            <p className="text-gray-400">
              Creating beautiful digital experiences with love and passion. Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FiMail className="text-pink-500" />
                your.email@example.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-pink-500" />
                +91 98765 43210
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <FiGithub />, link: "#" },
                { icon: <FiLinkedin />, link: "#" },
                { icon: <FiTwitter />, link: "#" },
                { icon: <FiInstagram />, link: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#EC4899" }}
                  className="text-2xl text-gray-400 hover:text-pink-500 transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Love You Message with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg mb-4"
          >
            Made with <FiHeart className="inline text-pink-500" /> for you!
          </motion.p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;