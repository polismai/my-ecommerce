import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  const baseStyles = "uppercase px-6 hover:bg-gray-800";
  
  const variants = {
    primary: "bg-black text-white",
    secondary: "bg-gray-600 hover:bg-gray-700",
  };

  const sizes = {
    sm: "text-[0.6667rem]",
    md: "text-[0.7222rem]",
    lg: "text-[0.7222rem]",
    xl: "text-[1rem] h-16",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
