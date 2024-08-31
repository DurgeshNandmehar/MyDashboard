import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ icon, name, path, className }) => {
  return (
    <div
      className={` py-2 px-2 mb-1 flex gap-2 items-center overflow-hidden hover:bg-light hover:text-dark text-gray-600 ${className}`}
    >
      <span>{icon}</span>
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default SidebarLink;
