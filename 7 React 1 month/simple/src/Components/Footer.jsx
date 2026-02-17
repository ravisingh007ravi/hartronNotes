import React from 'react';
import { 
  FiGithub, 
  FiInstagram, 
  FiLinkedin, 
  FiMail,
  FiHeart,
  FiArrowUp
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaTwitter } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { id: 1, icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:text-gray-900' },
    { id: 2, icon: FiInstagram, href: 'https://instagram.com/yourusername', label: 'Instagram', color: 'hover:text-pink-600' },
    { id: 3, icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { id: 4, icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-red-500' },
    { id: 5, icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter', color: 'hover:text-sky-500' }
  ];

  const quickLinks = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Skills', href: '#skills' },
    { id: 4, name: 'Education', href: '#education' },
    { id: 5, name: 'Contact', href: '#contact' }
  ];

  const techStack = [
    { id: 1, icon: FaReact, name: 'React', color: 'text-sky-500' },
    { id: 2, icon: SiTailwindcss, name: 'Tailwind', color: 'text-sky-400' },
    { id: 3, icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
    { id: 4, icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-green-500">R</span>
              <span className="text-white">S</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cyber Security Web Developer specializing in MERN stack development with a focus on building secure, scalable applications.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-3 pt-2">
              {techStack.map((tech) => (
                <div key={tech.id} className="group relative">
                  <tech.icon className={`w-5 h-5 ${tech.color} hover:scale-110 transition-transform`} />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-600"></span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-600"></span>
            </h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FiMail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>your.email@example.com</span>
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FiGithub className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>github.com/yourusername</span>
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <FiLinkedin className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>linkedin.com/in/yourusername</span>
              </p>
            </div>
          </div>

          {/* Newsletter/Updates */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-600"></span>
            </h4>
            <p className="text-gray-400 text-sm">
              Subscribe to get updates on my latest projects and cybersecurity insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-600 transition-colors"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>© {currentYear} Ramesh Sharma. All rights reserved.</p>
            <p className="text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <FiHeart className="w-3 h-3 text-red-500 animate-pulse" /> using React & TailwindCSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}