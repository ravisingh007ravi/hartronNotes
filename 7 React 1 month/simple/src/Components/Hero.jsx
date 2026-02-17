import React from 'react';
import { FiArrowRight, FiShield, FiCode, FiServer } from 'react-icons/fi';

export default function Hero() {
  const stats = [
    { id: 1, label: 'Years Experience', value: '4.5+', icon: FiCode },
    { id: 2, label: 'Projects Completed', value: '25+', icon: FiServer },
    { id: 3, label: 'Security Audits', value: '15+', icon: FiShield },
  ];

  const skills = ['MERN Stack', 'Cyber Security', 'API Security', 'Authentication'];

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Greeting with Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              <p className="text-green-600 font-medium text-sm">Available for Work</p>
            </div>
            
            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ramesh <span className="text-green-600">Sharma</span>
            </h1>
            
            {/* Title with Icon */}
            <div className="flex items-center gap-2 text-gray-700">
              <FiShield className="w-5 h-5 text-green-600" />
              <h2 className="text-xl md:text-2xl font-semibold">
                Cyber Security Web Developer
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Cyber Security Web Developer with 4.5+ years of experience in MERN Stack development. 
              Skilled in building secure, scalable web applications using MongoDB, Express.js, React.js, 
              and Node.js. Experienced in implementing authentication, authorization, API security, 
              and protecting applications from cyber threats.
            </p>
            
            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="flex justify-center mb-1">
                    <stat.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-sm flex items-center gap-2"
              >
                Get in Touch
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#work" 
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                View My Work
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-green-600 shadow-xl">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Ramesh Sharma - Cyber Security Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-full opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-900 rounded-full opacity-5"></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200">
                <p className="text-xs text-gray-500">Total Experience</p>
                <p className="text-lg font-bold text-gray-900">
                  <span className="text-green-600">4.5+</span> Years
                </p>
              </div>
              
              {/* Security Badge */}
              <div className="absolute top-4 -right-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                <p className="text-sm font-medium flex items-center gap-1">
                  <FiShield className="w-4 h-4" />
                  Security First
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}