import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

