import React from "react";

const BgColor = ({ children, className = "" }) => {
  return <div className={`bg-[#00000079]  ${className}`}>{children}</div>;
};

export default BgColor;
