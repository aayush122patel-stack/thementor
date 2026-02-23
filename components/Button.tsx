import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-600 hover:shadow-blue-200",
    accent: "bg-brand-red text-white hover:bg-red-600 hover:shadow-red-200",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    white: "bg-white text-brand-blue hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};