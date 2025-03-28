import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "h-16 uppercase text-white";
  const variants = {
    primary: "bg-black hover:bg-gray-800",
    secondary: "bg-gray-600 hover:bg-gray-700",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
