import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiHeart,
  FiMapPin,
  FiPhone,
  FiClock,
  FiArrowUp,
  FiSend
} from 'react-icons/fi';

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Cybersecurity",
    "MERN Stack",
    "API Development",
    "Database Design",
    "Cloud Solutions"
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/yourusername", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: FiTwitter, href: "https://twitter.com/yourusername", label: "Twitter", color: "hover:text-sky-500" },
    { icon: FiMail, href: "mailto:your.email@example.com", label: "Email", color: "hover:text-red-500" }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    alert('Thanks for subscribing! 🎉');
    e.target.reset();
  };

  return (
    <footer className={`relative transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-900'
    }`}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Ravi Singh
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              MERN Stack & Cybersecurity Developer passionate about building secure, 
              scalable web applications with modern technologies.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className={`text-xs px-3 py-1 rounded-full transition-colors duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-orange-600 hover:text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-orange-600 hover:text-white'
                  }`}
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to get updates about my latest projects and articles.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className={`flex-1 px-4 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                    darkMode
                      ? 'bg-gray-800 text-white border-gray-700'
                      : 'bg-gray-800 text-white border-gray-700'
                  }`}
                />
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-r-lg hover:from-orange-600 hover:to-orange-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="text-sm" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FiMapPin className="text-orange-500 text-lg" />
            <span>India</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FiMail className="text-orange-500 text-lg" />
            <a href="mailto:your.email@example.com" className="hover:text-orange-500 transition-colors">
              your.email@example.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FiClock className="text-orange-500 text-lg" />
            <span>Available for freelance work</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Ravi Singh. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FiHeart className="text-red-500 animate-pulse" />
              <span>using React & TailwindCSS</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-orange-600 text-gray-400 hover:text-white transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowUp className="text-sm" />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </footer>
  );
}