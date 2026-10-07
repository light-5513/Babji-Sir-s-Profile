import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, className, onClick, as = 'button', href, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out bg-light-bg dark:bg-dark-bg text-black dark:text-white shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed hover:-translate-y-1";
  
  const Component = as;
  
  if (as === 'a') {
    return (
      <Component href={href} className={cn(baseClasses, className)} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component onClick={onClick} className={cn(baseClasses, className)} {...props}>
      {children}
    </Component>
  );
};

export default Button;
