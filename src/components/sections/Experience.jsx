import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers.',
      achievements: [
        'Delivered 20+ client projects',
        'Reduced bug reports by 60%',
        'Introduced automated testing'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Co.',
      period: '2019 - 2020',
      description: 'Built responsive user interfaces and implemented pixel-perfect designs. Worked closely with UX team to improve user experience.',
      achievements: [
        'Redesigned main product UI',
        'Increased user engagement by 35%',
        'Optimized load times by 50%'
      ]
    }
  ];

  return (
    <Section id="experience" background="default">
      <SectionTitle 
        title="Work Experience" 
        subtitle="My professional journey and achievements"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-linear-to-b from-primary-600 to-accent-600"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-3">
                      {exp.period}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;

