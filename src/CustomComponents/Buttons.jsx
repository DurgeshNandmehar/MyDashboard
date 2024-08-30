import React from "react";

const Buttons = ({
  children,
  className = "",
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      className={`px-4 py-1 rounded-sm bg-yellow-800 hover:bg-yellow-900 active:bg-yellow-800 text-white  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttons;
