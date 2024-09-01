import React from "react";

const MyButton = ({
  type = "button",
  disabled = "",
  children = "Button",
  size = "sm",
  rounded = "rounded-none",
  bgColor = "bg-red-500",
  className,

  onClick,
}) => {
  const sizes = {
    sm: "px-4 py-1 ",
    md: "px-8 py-2 text-xl",
    lg: "px-12 py-3 text-2xl",
  };

  const roundeds = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    xxl: "rounded-2xl",
    full: "rounded-full",
  };

  return (
    <button
      type={type}
      className={` ${sizes[size]} ${roundeds[rounded]} ${bgColor} text-white text-nowrap ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
