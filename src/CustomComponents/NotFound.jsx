import React from "react";
import PageNotFound from "../assets/Not-Found.svg";
import { BgImage, MyButton } from "../Components/index";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="text-center mb-5">
      <div className="text-center  mb-5 text-[#4154f1]">
        <div className="text-7xl sm:text-8xl mb-3">404</div>
        <div className="text-2xl font-medium">
          The page you are looking for doesn't exist.
        </div>
      </div>

      <BgImage className=" aspect-video md:aspect-auto md:h-[270px] mb-5 bg-notFound bg-contain"></BgImage>

      <Link
        className={`inline-flex items-center gap-1 bg-[#ff6584] px-4 py-1 text-white rounded-sm justify-center`}
      >
        <IoArrowBackOutline />
        Back
      </Link>
    </div>
  );
};

export default NotFound;
