import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, 
  SiJavascript, SiHtml5, SiTailwindcss,
  SiPython, SiGit, SiGithub, SiVercel,
  SiMysql, SiPostman, SiLinux, SiFigma,
  SiMui, SiBootstrap, SiRedux, SiTypescript
} from 'react-icons/si';
import { MdCss } from "react-icons/md";

import { FiShield, FiServer, FiDatabase, FiLock } from 'react-icons/fi';

export default function Skill({ darkMode }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Technical Skills Data
  const technicalSkills = {
    "Frontend Development": {
      icon: <SiReact className="text-2xl" />,
      skills: [
        { name: "React.js", level: 90, icon: <SiReact />, color: "text-blue-500" },
        { name: "JavaScript", level: 88, icon: <SiJavascript />, color: "text-yellow-500" },
        { name: "TypeScript", level: 75, icon: <SiTypescript />, color: "text-blue-600" },
        { name: "HTML5", level: 92, icon: <SiHtml5 />, color: "text-orange-600" },
        { name: "CSS3", level: 85, icon: <MdCss />, color: "text-blue-500" },
        { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss />, color: "text-cyan-500" },
        { name: "Material-UI", level: 80, icon: <SiMui />, color: "text-blue-700" },
        { name: "Bootstrap", level: 85, icon: <SiBootstrap />, color: "text-purple-600" },
        { name: "Redux", level: 78, icon: <SiRedux />, color: "text-purple-500" },
      ]
    },
    "Backend Development": {
      icon: <FiServer className="text-2xl" />,
      skills: [
        { name: "Node.js", level: 88, icon: <SiNodedotjs />, color: "text-green-600" },
        { name: "Express.js", level: 85, icon: <SiExpress />, color: "text-gray-600 dark:text-gray-400" },
        { name: "Python", level: 75, icon: <SiPython />, color: "text-blue-500" },
        { name: "REST APIs", level: 90, icon: <FiServer />, color: "text-orange-500" },
        { name: "JWT Auth", level: 85, icon: <FiLock />, color: "text-red-500" },
      ]
    },
    "Database & DevOps": {
      icon: <FiDatabase className="text-2xl" />,
      skills: [
        { name: "MongoDB", level: 88, icon: <SiMongodb />, color: "text-green-500" },
        { name: "MySQL", level: 80, icon: <SiMysql />, color: "text-blue-600" },
        { name: "Git", level: 85, icon: <SiGit />, color: "text-orange-600" },
        { name: "GitHub", level: 88, icon: <SiGithub />, color: "text-gray-700 dark:text-gray-300" },
        { name: "Postman", level: 85, icon: <SiPostman />, color: "text-orange-600" },
        { name: "Vercel", level: 80, icon: <SiVercel />, color: "text-gray-800 dark:text-white" },
      ]
    },
    "Cybersecurity": {
      icon: <FiShield className="text-2xl" />,
      skills: [
        { name: "Network Security", level: 82, icon: <FiShield />, color: "text-green-600" },
        { name: "Linux Security", level: 78, icon: <SiLinux />, color: "text-yellow-600" },
        { name: "Secure Coding", level: 85, icon: <FiLock />, color: "text-red-500" },
        { name: "OWASP", level: 80, icon: <FiShield />, color: "text-orange-500" },
        { name: "Encryption", level: 75, icon: <FiLock />, color: "text-purple-500" },
      ]
    }
  };

  // Soft Skills
  const softSkills = [
    "Problem Solving", "Team Collaboration", "Communication", 
    "Time Management", "Critical Thinking", "Adaptability",
    "Leadership", "Attention to Detail", "Fast Learner"
  ];

  return (
    <section id="skills" className={`py-20 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and tools I work with to build secure, scalable web applications
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {Object.entries(technicalSkills).map(([category, data]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-700' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-orange-500">
                <div className="text-orange-500">
                  {data.icon}
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg ${skill.color}`}>
                          {skill.icon}
                        </span>
                        <span className={`font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${
                        darkMode ? 'text-orange-400' : 'text-orange-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`rounded-2xl p-8 shadow-lg ${
            darkMode 
              ? 'bg-gray-900/50 border border-gray-700' 
              : 'bg-white border border-gray-100'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Soft Skills
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-orange-600 hover:text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Additional Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <span className="font-semibold text-orange-500">3+</span>
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}> Years Experience</span>
            </div>
            <div className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <span className="font-semibold text-orange-500">20+</span>
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}> Projects Completed</span>
            </div>
            <div className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <span className="font-semibold text-orange-500">10+</span>
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}> Certifications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}