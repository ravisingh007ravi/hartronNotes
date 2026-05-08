import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiCalendar, 
  FiTrendingUp,
  FiStar,
  FiBookOpen
} from 'react-icons/fi';
import { FaGraduationCap } from "react-icons/fa6";

export default function Education({ darkMode }) {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "University of Technology",
      year: "2019 - 2021",
      passoutYear: 2021,
      percentage: "9.1 CGPA",
      score: 9.1,
      maxScore: 10,
      icon: <FaGraduationCap className="text-3xl" />,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Specialized in Cybersecurity & Cloud Computing",
        "Research Paper on Blockchain Technology",
        "Completed Major Project on Secure Authentication System"
      ],
      courses: ["Advanced Web Development", "Network Security", "Cloud Architecture", "Machine Learning"]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "State University",
      year: "2013 - 2016",
      passoutYear: 2016,
      percentage: "78%",
      score: 78,
      maxScore: 100,
      icon: <FiBookOpen className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Secured University Merit Position",
        "Best Project Award in Web Development",
        "Active Member of Coding Club"
      ],
      courses: ["Programming Fundamentals", "Database Management", "Web Technologies", "Data Structures"]
    },
    {
      id: 3,
      degree: "Higher Secondary Education (12th)",
      institution: "Senior Secondary School",
      year: "2011 - 2013",
      passoutYear: 2013,
      percentage: "80%",
      score: 80,
      maxScore: 100,
      icon: <FiAward className="text-3xl" />,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Science Stream with Computer Science",
        "School Topper in Mathematics",
        "Participated in National Science Fair"
      ],
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
    },
    {
      id: 4,
      degree: "Secondary Education (10th)",
      institution: "High School",
      year: "2010 - 2011",
      passoutYear: 2011,
      percentage: "91%",
      score: 91,
      maxScore: 100,
      icon: <FiStar className="text-3xl" />,
      color: "from-orange-500 to-red-500",
      achievements: [
        "Distinction in All Subjects",
        "Best Student Award",
        "Certificate of Merit for Academic Excellence"
      ],
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"]
    }
  ];

  // Calculate total education stats
  const totalStats = {
    totalYears: 2025 - 2011,
    averagePercentage: ((9.1/10 * 100) + 78 + 80 + 91) / 4,
    highestScore: 91,
    institutions: 4
  };

  return (
    <section id="education" className={`py-20 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800/30' : 'bg-gradient-to-b from-white via-gray-50 to-white'
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
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My academic journey and educational qualifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg z-10">
                <div className="text-white text-xl">
                  {edu.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800/80 hover:bg-gray-800 border border-gray-700' 
                    : 'bg-white hover:shadow-2xl'
                }`}>
                  {/* Year Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                      darkMode
                        ? 'bg-orange-900/50 text-orange-400'
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      <FiCalendar className="text-sm" />
                      {edu.year}
                    </div>
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                      darkMode
                        ? 'bg-gray-700 text-green-400'
                        : 'bg-green-50 text-green-600'
                    }`}>
                      <FiTrendingUp />
                      {edu.percentage}
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {edu.degree}
                  </h3>
                  
                  {/* Institution */}
                  <p className={`mb-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {edu.institution}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Score: {edu.percentage}
                      </span>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-orange-400' : 'text-orange-600'
                      }`}>
                        {((edu.score / edu.maxScore) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(edu.score / edu.maxScore) * 100}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${edu.color}`}
                      />
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 flex items-center gap-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <FiAward className="text-orange-500" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className={`text-sm flex items-start gap-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span className="text-orange-500 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Subjects/Courses */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Key {'degree' === edu.degree ? 'Subjects' : 'Courses'}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(edu.subjects || edu.courses).slice(0, 4).map((item, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                      {(edu.subjects || edu.courses).length > 4 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{(edu.subjects || edu.courses).length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
            darkMode 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white shadow-lg'
          }`}>
            <FaGraduationCap className={`text-3xl mx-auto mb-2 ${
              darkMode ? 'text-orange-400' : 'text-orange-500'
            }`} />
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {totalStats.institutions}
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Degrees & Certifications
            </p>
          </div>

          <div className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
            darkMode 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white shadow-lg'
          }`}>
            <FiTrendingUp className={`text-3xl mx-auto mb-2 ${
              darkMode ? 'text-orange-400' : 'text-orange-500'
            }`} />
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {totalStats.averagePercentage.toFixed(1)}%
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Average Score
            </p>
          </div>

          <div className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
            darkMode 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white shadow-lg'
          }`}>
            <FiStar className={`text-3xl mx-auto mb-2 ${
              darkMode ? 'text-orange-400' : 'text-orange-500'
            }`} />
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {totalStats.highestScore}%
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Highest Score
            </p>
          </div>

          <div className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
            darkMode 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white shadow-lg'
          }`}>
            <FiCalendar className={`text-3xl mx-auto mb-2 ${
              darkMode ? 'text-orange-400' : 'text-orange-500'
            }`} />
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {totalStats.totalYears}+
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Years of Education
            </p>
          </div>
        </motion.div>

        {/* Quote or Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
            darkMode
              ? 'bg-orange-900/30 text-orange-300'
              : 'bg-orange-100 text-orange-600'
          }`}>
            <FiAward className="text-2xl" />
            <span className="font-semibold">Always learning, always growing 📚</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}