import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMenu } from 'react-icons/fi';
import { HiOutlineDownload } from 'react-icons/hi';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialLinks = [
    { id: 1, icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { id: 2, icon: FiInstagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { id: 3, icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { id: 4, icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold text-green-600 hover:text-green-700 transition-colors">
              RS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium shadow-sm"
            >
              <HiOutlineDownload className="w-4 h-4" />
              <span>Resume</span>
            </a>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
            aria-label="Menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
              >
                <HiOutlineDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              
              <div className="flex items-center justify-center space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}