import React from "react";
import PageNotFound from "../assets/Not-Found.svg";
import { BgImage, MyButton } from "../Components/index";
import { IoArrowBackOutline } from "react-icons/io5";
const NotFound = () => {
  return (
    <div className="text-center mb-5">
      <div className="text-center text-2xl mb-5">
        <div className="">404</div>
        <div>Not Found</div>
      </div>

      <BgImage className=" aspect-video md:aspect-auto md:h-[270px] mb-5 bg-notFound bg-contain"></BgImage>

      <MyButton
        size="sm"
        bgColor="bg-black"
        className={`inline-flex items-center gap-1 rounded-sm justify-center`}
      >
        <IoArrowBackOutline />
        Back
      </MyButton>
    </div>
  );
};

export default NotFound;
