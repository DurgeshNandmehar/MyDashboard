import React from "react";

const Grid = ({ children, className = "" }) => {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
