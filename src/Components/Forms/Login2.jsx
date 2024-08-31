import React from "react";
import { MainTitle } from "../../App";
import P from "../../CustomComponents/P";
import { Link } from "react-router-dom";
import MyButton from "../../CustomComponents/MyButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const Login2 = () => {
  const loginInputData = [
    {
      id: 1,
      label: "Email",
      placeholder: "Example@email.com",
      type: "text",
    },
    {
      id: 2,
      label: "Password",
      placeholder: "At least 8 characters",
      type: "password",
    },
  ];
  return (
    <>
      <MainTitle title={`Login Form`}></MainTitle>

      <div className="px-4 py-10 bg-white">
        <div className="bgImageCover bg-loginBg rounded-xl"></div>
        <h6 className="mb-4 text-2xl">Welcome Back</h6>
        <p className="mb-6">
          Today is a new day. it's your day. Your shape it. Sign in to start
          managing your projects.
        </p>
        {loginInputData.map((data) => (
          <div key={data.id} className="mb-3">
            <label htmlFor="" className="inline-block mb-2">
              {data.label}
            </label>
            <div className="border rounded-md">
              <input
                type={data.type}
                placeholder={data.placeholder}
                className="w-full py-2 px-3 rounded-md outline-none"
              />
              <span></span>
            </div>
          </div>
        ))}

        <div className="flex justify-end mb-3">
          <Link className="text-blue-600">Forgot Password?</Link>
        </div>
        <MyButton className={`w-full mb-10 bg-[#162D3A] py-2 rounded-xl`}>
          Sign in
        </MyButton>

        <div className="flex gap-3 items-center mb-4">
          <span className="h-[2px] inline-block bg-gray-200 w-full" />
          <span className="text-nowrap">Or sign in with</span>
          <span className="h-[2px] inline-block bg-gray-200 w-full" />
        </div>

        <div className="flex gap-4 flex-wrap justify-between text-md mb-5">
          <button
            type="button"
            className="flex items-center gap-2 px-5 flex-grow py-2 rounded-md bg-blue-50"
          >
            <FcGoogle size={25} />
            Google
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-5 flex-grow py-2 rounded-md bg-blue-50"
          >
            <FaFacebook size={25} className="text-[#1877f2]" />
            Facebook
          </button>
        </div>

        <div className="text-center mb-5">
          Don't you have an account?
          <Link className="text-blue-600">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login2;
