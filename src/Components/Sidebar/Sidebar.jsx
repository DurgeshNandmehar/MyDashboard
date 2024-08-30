import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";

import { BsJournalText } from "react-icons/bs";
import Accordion from "../../CustomComponents/Accordion";

const Sidebar = ({ onClick, className }) => {
  const sidebarData = [
    {
      id: 1,
      title: { name: "Dashboard", icons: <MdDashboard /> },
      data: [
        {
          name: "Fogin",
          path: "/MyDashboard/Login",
        },
      ],
    },
    {
      id: 2,
      title: { name: "Form", icons: <BsJournalText /> },
      data: [
        {
          name: "Login",
          path: "/MyDashboard/Login",
        },
        {
          name: "Signup",
          path: "/MyDashboard/Signup",
        },
      ],
    },
  ];

  return (
    <aside className={` ${className}`}>
      <div className={``}>
        {sidebarData.map((accordion) => (
          <Accordion
            key={accordion.id}
            title={accordion.title}
            data={accordion.data}
            onClick={onClick}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
