import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold';
  
  const variants = {
    primary: 'bg-gold text-white border-transparent hover:bg-gold-light shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline: 'bg-transparent text-charcoal border-charcoal/20 hover:border-gold hover:text-gold',
    ghost: 'bg-transparent text-charcoal hover:bg-gold/10 hover:text-gold border-transparent',
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
