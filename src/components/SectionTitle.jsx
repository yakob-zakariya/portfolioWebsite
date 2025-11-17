import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-20 h-1 bg-linear-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;

