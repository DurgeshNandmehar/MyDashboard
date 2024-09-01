import React, { useState } from "react";
import { MainTitle } from "../../App";
import P from "../../CustomComponents/P";
import { Link } from "react-router-dom";
import MyButton from "../../CustomComponents/MyButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import Login from "./Login";
import { PiHandWavingFill } from "react-icons/pi";

const Login2 = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const loginInputData = [
    {
      id: 1,
      label: "Email",
      placeholder: "Example@email.com",
      type: "text",
      name: "email",
      value: value.email,
      onchange: (e) =>
        setValue({ ...value, [e.target.name]: e.target.value.trim() }),
      showError: error.email,
    },
    {
      id: 2,
      label: "Password",
      placeholder: "At least 8 characters",
      type: "password",
      name: "password",
      value: value.password,
      onchange: (e) =>
        setValue({ ...value, [e.target.name]: e.target.value.trim() }),
      showError: error.password,
    },
  ];

  const validate = () => {
    const error = {};

    if (value.email != "") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value.email)) error.email = "Invalid Email";
    }

    if (value.password != "") {
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(value.password))
        error.password = "Invalid Password";
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(error).length == 0) {
      alert("Submit");
    }
  };
  return (
    <>
      <div className="sm:grid lg:grid-cols-2 gap-5 mb-8 bg-white py-5 px-3 sm:px-6 shadow-lg">
        <form className=" md:w-[65%] mx-auto py-10" onSubmit={handleSubmit}>
          <div className="bgImageCover bg-loginBg rounded-xl lg:hidden"></div>
          <h6 className="text-2xl mb-5 flex gap-2 items-center">
            Welcome Back{" "}
            <PiHandWavingFill size={24} className="text-yellow-400" />
          </h6>
          <p className="mb-6">
            Today is a new day. it's your day. Your shape it. Sign in to start
            managing your projects.
          </p>

          {loginInputData.map((data) => (
            <div key={data.id} className="mb-3">
              <label htmlFor="" className="inline-block mb-2">
                {data.label}
              </label>
              <div
                className={`border rounded-md ${
                  error[data.name] != "" && error[data.name] != undefined
                    ? "border-red-600"
                    : ""
                }`}
              >
                <input
                  type={data.type}
                  placeholder={data.placeholder}
                  value={data.value}
                  name={data.name}
                  onChange={data.onchange}
                  onBlur={() => setError(validate())}
                  required
                  className={`w-full py-2 px-3 rounded-md outline-none`}
                />
                <span></span>
              </div>
              <span className="text-sm text-red-600">{data.showError}</span>
            </div>
          ))}

          <div className="flex justify-between  mb-3">
            <span>
              <label htmlFor="remember">Remember Me </label>
              <input type="checkbox" id="remember" className="" />
            </span>
            <Link className="text-blue-600">Forgot Password?</Link>
          </div>
          <MyButton
            className={`w-full mb-10  py-2 rounded-xl`}
            bgColor={`bg-[#162D3A]`}
            type="submit"
          >
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
        </form>

        <div className="bg-loginBgRight bg-no-repeat bg-cover bg-center rounded-xl border hidden lg:block"></div>
      </div>
    </>
  );
};

export default Login2;
