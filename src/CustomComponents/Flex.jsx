import React from "react";

const Flex = ({ children, className = "" }) => {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
};
export default Flex;

export const FlexCenter = ({ children, className = "" }) => {
  return (
    <div className={`flex gap-2 justify-center items-center ${className}`}>
      {children}
    </div>
  );
};

export const FlexVCenter = ({ children, className = "" }) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>{children}</div>
  );
};

export const FlexHCenter = ({ children, className = "" }) => {
  return (
    <div className={`flex gap-2 justify-center ${className}`}>{children}</div>
  );
};

export const FlexEvenlyCenter = ({ children, className = "" }) => {
  return (
    <div className={`flex gap-2 justify-evenly items-center ${className}`}>
      {children}
    </div>
  );
};

export const FlexAroundCenter = ({ children, className = "" }) => {
  return (
    <div className={`flex gap-2 justify-around items-center ${className}`}>
      {children}
    </div>
  );
};

export const FlexBetweenCenter = ({ children, className = "", onClick }) => {
  return (
    <div
      className={`flex gap-2 justify-between items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
