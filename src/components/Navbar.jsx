import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ✅ Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <h1 className="text-1xl md:text-3xl font-bold text-gray-800 dark:text-white">
            NOOR <span className="text-green-600  dark:text-yellow-300">REHMAN</span>
          </h1>
        </motion.div> 

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-yellow-300 font-medium transition"
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-800 dark:text-white"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
        </div>

        {/* ✅ Mobile Menu Icon */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-800 dark:text-white"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-yellow-300 font-medium"
              >
                <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              </motion.li>
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className="mt-2 flex items-center gap-2 text-gray-800 dark:text-white"
              >
                {darkMode ? <><FiSun /> Light Mode</> : <><FiMoon /> Dark Mode</>}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
