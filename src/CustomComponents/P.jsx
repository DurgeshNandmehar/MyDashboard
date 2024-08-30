import React from "react";

const P = ({ children, className }) => {
  return <p className={`mb-1 text-sm text-center ${className}`}>{children}</p>;
};

export default P;
