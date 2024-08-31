import React, { useState } from "react";
import { FaCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FlexBetweenCenter, FlexVCenter } from "../Components/index";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ title, data = [], onClick }) => {
  const [showData, setShowData] = useState(false);
  return (
    <div className="mb-1 text-gray-600 ">
      <div
        className={`py-2 flex gap-2 overflow-hidden items-center px-2 sm:text-lg hover:text-secondry hover:bg-light ${
          showData ? "bg-light  text-secondry" : ""
        }`}
      >
        <span className="">{title.icons}</span>
        <FlexBetweenCenter
          className="flex-grow cursor-pointer"
          onClick={() => setShowData(!showData)}
        >
          {title.name}

          <IoIosArrowDown
            className={`transition-all ease-in-out duration-300 ${
              showData ? "rotate-180" : "rotate-0"
            }`}
          />
        </FlexBetweenCenter>
      </div>

      <div
        className={` transition-all ease-in-out duration-[400ms] overflow-hidden `}
        style={{ height: `${showData ? data.length * 35 + 16 : 0}px` }}
      >
        <ul className="py-2 ps-11 ">
          {data.map((link, index) => (
            <li key={index} className="h-[35px] flex items-center ">
              <span className="flex gap-2 items-center hover:text-dark">
                <FaCircle size={6} />
                <Link
                  to={link.path}
                  className="translate-y-[-1px]"
                  onClick={
                    window.innerWidth >= 0 && window.innerWidth <= 639
                      ? onClick
                      : null
                  }
                >
                  {link.name}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
