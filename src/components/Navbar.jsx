import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle dark mode on your website
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-sky-600 dark:bg-gray-900 py-4 px-6 shadow-md`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-white flex items-center"
        >
          <p className="text-2xl md:text-3xl font-bold">
            NOOR <span className="text-yellow-300">REHMAN</span>
          </p>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-yellow-300 font-semibold transition-colors"
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white p-2 rounded-full"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col gap-4 pb-4">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-yellow-300 font-semibold border-b border-red-700 pb-2"
              >
                <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              </motion.li>
            ))}
            <li className="pt-2">
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 text-white font-semibold"
              >
                {darkMode ? (
                  <>
                    <FiSun /> Light Mode
                  </>
                ) : (
                  <>
                    <FiMoon /> Dark Mode
                  </>
                )}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;