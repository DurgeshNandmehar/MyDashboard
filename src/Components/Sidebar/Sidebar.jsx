import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";

import { BsJournalText } from "react-icons/bs";
import Accordion from "../../CustomComponents/Accordion";
import { FlexBetweenCenter } from "../index";
import { CgComponents } from "react-icons/cg";
import { Link } from "react-router-dom";
import SidebarLink from "../../CustomComponents/SidebarLink";

const Sidebar = ({ onClick, className }) => {
  const sidebarData = [
    {
      id: 2,
      title: { name: "Form", icons: <BsJournalText size={24} /> },
      data: [
        {
          name: "Login",
          path: "/MyDashboard/Forms/Login",
        },
        {
          name: "Signup",
          path: "/MyDashboard/Forms/Signup",
        },
      ],
    },
    {
      id: 3,
      title: { name: "Component", icons: <CgComponents size={24} /> },
      data: [
        {
          name: "Accordian",
          path: "/MyDashboard/Accordian",
        },
      ],
    },
  ];

  return (
    <aside className={` px-2 ${className}`}>
      <div className={``}>
        <SidebarLink
          icon={<MdDashboard size={24} />}
          name={`Dashboard`}
          path={`/`}
        />
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
