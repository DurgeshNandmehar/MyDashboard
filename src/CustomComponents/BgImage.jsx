import React from "react";

const BgImage = ({
  children,
  bgSize = "bg-center",
  bgRepeat = "bg-no-repeat",
  className = ``,
}) => {
  return (
    <div className={` ${bgSize} ${bgRepeat} ${className} `}>{children}</div>
  );
};

export default BgImage;
