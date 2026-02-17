import React from 'react';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiPassport,
  SiDocker,
  SiMysql,
  SiPostman,
  SiFigma
} from 'react-icons/si';
import { FaAws, FaShieldAlt, FaLock, FaBug, FaServer } from "react-icons/fa";
import { BiCodeAlt } from 'react-icons/bi';

export default function Skill() {
  // Skill categories with icons in original colors
  const skillCategories = [
    {
      id: 1,
      title: 'MERN Stack',
      icon: BiCodeAlt,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 90, color: 'text-green-600', bg: 'bg-green-100' },
        { name: 'Express.js', icon: SiExpress, level: 85, color: 'text-gray-600', bg: 'bg-gray-100' },
        { name: 'React.js', icon: SiReact, level: 95, color: 'text-sky-500', bg: 'bg-sky-100' },
        { name: 'Node.js', icon: SiNodedotjs, level: 85, color: 'text-green-600', bg: 'bg-green-100' }
      ]
    },
    {
      id: 2,
      title: 'Cyber Security',
      icon: FaShieldAlt,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      skills: [
        { name: 'Authentication', icon: FaLock, level: 90, color: 'text-green-600', bg: 'bg-green-100' },
        { name: 'API Security', icon: FaServer, level: 85, color: 'text-gray-600', bg: 'bg-gray-100' },
        { name: 'Penetration Testing', icon: FaBug, level: 75, color: 'text-red-500', bg: 'bg-red-100' },
        { name: 'JWT/OAuth', icon: SiJsonwebtokens, level: 85, color: 'text-purple-500', bg: 'bg-purple-100' }
      ]
    },
    {
      id: 3,
      title: 'Frontend',
      icon: SiReact,
      iconColor: 'text-sky-500',
      bgColor: 'bg-sky-100',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: 'text-yellow-500', bg: 'bg-yellow-100' },
        { name: 'HTML5', icon: SiHtml5, level: 95, color: 'text-orange-500', bg: 'bg-orange-100' },
        { name: 'CSS3', icon: SiCss3, level: 85, color: 'text-blue-500', bg: 'bg-blue-100' },
        { name: 'TailwindCSS', icon: SiTailwindcss, level: 90, color: 'text-sky-400', bg: 'bg-sky-100' }
      ]
    },
    {
      id: 4,
      title: 'Tools & Others',
      icon: SiGit,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-100',
      skills: [
        { name: 'Git', icon: SiGit, level: 85, color: 'text-orange-600', bg: 'bg-orange-100' },
        { name: 'GitHub', icon: SiGithub, level: 90, color: 'text-gray-800', bg: 'bg-gray-100' },
        { name: 'Postman', icon: SiPostman, level: 80, color: 'text-orange-500', bg: 'bg-orange-100' },
        { name: 'Docker', icon: SiDocker, level: 70, color: 'text-sky-500', bg: 'bg-sky-100' }
      ]
    }
  ];

  // Additional skills with original colors
  const additionalSkills = [
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500', bg: 'bg-orange-100' },
    { name: 'Passport.js', icon: SiPassport, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Figma', icon: SiFigma, color: 'text-purple-500', bg: 'bg-purple-100' }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-green-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining cybersecurity expertise with full-stack development to build secure, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 ${category.bgColor} rounded-lg`}>
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 ${skill.bg} rounded-md`}>
                          <skill.icon className={`w-4 h-4 ${skill.color}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-600 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all duration-300"
              >
                <div className={`p-1.5 ${skill.bg} rounded-md`}>
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}