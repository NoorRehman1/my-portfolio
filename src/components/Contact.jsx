import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS IDs
    const serviceID = 'service_lnaez4s';
    const templateID = 'template_6trnhsw';
    const publicKey = 'AboSfk4ywYot85nhn';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setMessageSent(false);
        }, 6000); // message 6 seconds ke baad chala jaye
      })
      .catch((err) => {
        alert('Oops! Something went wrong, please try again.');
        console.error(err);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-yellow-400">
            Get In <span className="text-indigo-600 dark:text-white">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-white max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 dark:bg-yellow-100 dark:text-gray-900 rounded-full">
                <FiMail className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-yellow-400">Email</h3>
                <p className="text-gray-600 dark:text-white">noorreehman90@gmail.com</p>
                <a
                  href="mailto:noorreehman90@gmail.com"
                  className="text-indigo-600 dark:text-yellow-400 text-sm hover:underline"
                >
                  Send Message
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 dark:bg-yellow-100 dark:text-gray-900 rounded-full">
                <FiMapPin className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-yellow-400">Location</h3>
                <p className="text-gray-600 dark:text-white">Mosamyat</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-yellow-400 text-sm hover:underline"
                >
                  View on Map
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 text-indigo-600 dark:bg-yellow-100 dark:text-gray-900 rounded-full">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-yellow-400">Phone</h3>
                <p className="text-gray-600 dark:text-white">+92 700242351</p>
                <a
                  href="tel:+92700242351"
                  className="text-indigo-600 dark:text-yellow-400 text-sm hover:underline"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:text-white outline-none transition"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300 transition duration-300 shadow-md"
              >
                <FiSend className="mr-2" />
                Send Message
              </motion.button>
            </form>

            {messageSent && (
              <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-md shadow-md transition-opacity duration-500">
                Thank you for reaching out! Your message has been received successfully. We appreciate your time and will get back to you promptly. Looking forward to connecting with you soon.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
