import React from 'react';

const Section = ({ 
  children, 
  id, 
  className = '', 
  background = 'default',
  ...props 
}) => {
  const backgrounds = {
    default: 'bg-white dark:bg-gray-900',
    alt: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'bg-linear-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800'
  };
  
  return (
    <section 
      id={id}
      className={`py-20 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;

