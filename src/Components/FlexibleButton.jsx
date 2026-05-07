// FlexibleButton.jsx
import React from "react";
import { motion } from "framer-motion"; // optional for animations

const FlexibleButton = ({
  children,
  onClick,
  variant = "primary", // primary, secondary, danger, etc.
  size = "md", // sm, md, lg
  disabled = false,
  className = "",
  animate = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const combined = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (animate) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combined}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button
      className={combined}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FlexibleButton;
