import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';

export default function Hero({ darkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-gray-300' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', color: 'hover:text-blue-700 dark:hover:text-blue-400' },
    { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter', color: 'hover:text-sky-500 dark:hover:text-sky-400' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-red-500 dark:hover:text-red-400' },
  ];

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center pt-20 pb-16 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/30'
          : 'bg-gradient-to-br from-white via-gray-50 to-orange-50/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                darkMode
                  ? 'bg-orange-900/50 text-orange-300'
                  : 'bg-orange-100 text-orange-600'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Welcome to my portfolio
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Hi, I'm </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Ravi Singh
              </span>
            </motion.h1>

            {/* Role / Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className={`text-2xl sm:text-3xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="inline-block border-b-4 border-orange-500 pb-1">
                  MERN Stack & Cybersecurity Developer
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Passionate full-stack developer specializing in the MERN stack with a strong focus on cybersecurity. 
              I build secure, scalable web applications that protect user data while delivering exceptional experiences. 
              Combining modern development practices with security-first mindset.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <FiMail className="text-lg" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className={`px-6 py-3 border-2 border-orange-500 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                  darkMode
                    ? 'bg-transparent text-orange-400 hover:bg-orange-900/50'
                    : 'bg-white text-orange-600 hover:bg-orange-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <FiDownload className="text-lg" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg ${
                      darkMode
                        ? 'bg-gray-800 text-gray-400 hover:text-orange-400'
                        : 'bg-white text-gray-600'
                    } ${social.color}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative">
              {/* Decorative circles behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className={`absolute -top-4 -right-4 w-32 h-32 rounded-full blur-2xl opacity-50 ${
                darkMode ? 'bg-orange-600' : 'bg-orange-200'
              }`}></div>
              <div className={`absolute -bottom-4 -left-4 w-40 h-40 rounded-full blur-2xl opacity-40 ${
                darkMode ? 'bg-orange-700' : 'bg-orange-300'
              }`}></div>
              
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-r from-orange-400 to-orange-600 shadow-2xl">
                  <div className={`w-full h-full rounded-full overflow-hidden border-4 ${
                    darkMode ? 'border-gray-800' : 'border-white'
                  }`}>
                    <img
                      src="https://res.cloudinary.com/dcsbjck9y/image/upload/v1768790884/Ravi_p2mkkt.png"
                      alt="Ravi Singh - MERN Stack & Cybersecurity Developer"
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Floating badge - Experience */}
                <motion.div
                  className={`absolute -bottom-2 -right-2 rounded-full shadow-lg px-4 py-2 flex items-center gap-2 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Available for work
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              darkMode ? 'border-gray-600' : 'border-gray-400'
            }`}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-orange-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}