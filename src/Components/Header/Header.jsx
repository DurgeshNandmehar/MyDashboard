import React from "react";
import {
  Container,
  Flex,
  FlexBetweenCenter,
  FlexCenter,
  FlexVCenter,
  Image,
} from "../index";
import { IoIosArrowDown } from "react-icons/io";
const Header = ({ showSidebar, className, onClick }) => {
  return (
    <header className="absolute z-10 w-full top-0 bg-white">
      <Container className={`shadow-md`}>
        <FlexBetweenCenter className="py-3">
          <FlexVCenter className="text-gray-500">
            <FlexCenter className="rounded-full bg-gray-200  ">
              <button
                type="button"
                onClick={onClick}
                className={`transition-all ease-in-out duration-500 p-[2px] ${
                  showSidebar
                    ? "-rotate-90 sm:rotate-90"
                    : "rotate-90 sm:-rotate-90"
                } `}
              >
                <IoIosArrowDown size={20} />
              </button>
            </FlexCenter>
            <div className="text-lg sm:text-2xl font-medium  ">
              Durgesh Nandmehar
            </div>
          </FlexVCenter>

          <div>Profile</div>

          {/* <div className="w-[24px] h-[24px] flex flex-col justify-around items-center">
            <div className="w-full h-[4px] rounded-md bg-black"></div>
            <div className="w-full h-[4px] rounded-md bg-black"></div>
            <div className="w-full h-[4px] rounded-md bg-black"></div>
          </div> */}
        </FlexBetweenCenter>
      </Container>
    </header>
  );
};

export default Header;
