import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Card from '../Card';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Code Commits', value: '1000+' }
  ];

  return (
    <Section id="about" background="alt">
      <SectionTitle 
        title="About Me" 
        subtitle="Get to know more about who I am and what I do"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-linear-to-br from-primary-500 to-accent-500 p-1">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Replace with your image */}
              <div className="text-9xl">🚀</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-full opacity-20 blur-2xl"></div>
        </div>
        
        {/* Right Column - Content */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Passionate Developer & Problem Solver
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
            With over 5 years of experience in web development, I specialize in building modern, 
            responsive applications using cutting-edge technologies.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My journey in tech started with a curiosity about how things work, and it has evolved into 
            a career where I get to build products that impact thousands of users. I'm constantly learning 
            and staying up-to-date with the latest industry trends and best practices.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat, index) => (
              <Card key={index} padding="sm" hover={false} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

