  import React from 'react';
  import { 
    FaGraduationCap, 
    FaSchool, 
    FaUniversity,
    FaCalendarAlt,
    FaPercentage 
  } from 'react-icons/fa';
  import { MdSchool } from 'react-icons/md';
  import { BiBookOpen } from 'react-icons/bi';

  export default function Education() {
    const educationData = [
      {
        id: 1,
        degree: '10th Standard (Matriculation)',
        institution: 'DAV Public School',
        board: 'CBSE',
        year: '2010',
        percentage: '91%',
        score: '91% out of 100%',
        icon: FaSchool,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        description: 'Completed matriculation with distinction'
      },
      {
        id: 2,
        degree: '12th Standard (Intermediate)',
        institution: 'DAV Public School',
        board: 'CBSE',
        year: '2012',
        percentage: '85%',
        score: '85% out of 100%',
        icon: MdSchool,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        description: 'Completed intermediate with science stream'
      },
      {
        id: 3,
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Axis College',
        board: 'University',
        year: '2016',
        percentage: '65%',
        score: '65% out of 100%',
        icon: FaUniversity,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        description: 'Graduated with Bachelor of Computer Applications'
      },
      {
        id: 4,
        degree: 'Master of Computer Applications (MCA)',
        institution: 'KIT College',
        board: 'University',
        year: '2018',
        percentage: 'Completed',
        score: 'Post Graduation',
        icon: FaGraduationCap,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        description: 'Post-graduation in Computer Applications'
      }
    ];

    // Academic achievements timeline
    const achievements = [
      { year: '2010', achievement: '91% in 10th Standard', icon: FaSchool },
      { year: '2012', achievement: '85% in 12th Standard', icon: MdSchool },
      { year: '2016', achievement: 'BCA - 65%', icon: FaUniversity },
      { year: '2018', achievement: 'MCA - Completed', icon: FaGraduationCap },
    ];

    return (
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Education <span className="text-green-600">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My academic background from schooling to post-graduation
            </p>
          </div>

          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 ${edu.bgColor} rounded-lg flex-shrink-0`}>
                    <edu.icon className={`w-6 h-6 ${edu.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-green-600 font-medium mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaPercentage className="w-3 h-3" />
                        {edu.score}
                      </span>
                    </div>

                    {edu.board && (
                      <p className="text-xs text-gray-500 mb-2">Board: {edu.board}</p>
                    )}
                    
                    <p className="text-sm text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
        </div>
      </section>
    );
  }