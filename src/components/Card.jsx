import React from 'react';
import { cn } from './Button';

const Card = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn(
        "rounded-2xl p-6 bg-white dark:bg-black shadow-neu-light dark:shadow-neu-dark transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
