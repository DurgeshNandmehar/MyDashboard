import React, { useState } from "react";
import { FlexBetweenCenter, MyButton, P } from "../index";
import { Link } from "react-router-dom";
import { MainTitle } from "../../App";
import { Key } from "@mui/icons-material";
const Login = () => {
  const [value, setValue] = useState({
    userId: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSetValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const validate = (inputField) => {
    const error = {};

    if (value.userId.trim() != "") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value.userId)) error.userId = "Invalid email";
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
      alert("Form Submit");
    }
  };

  return (
    <>
      <div
        className="py-10 rounded-md mb-5 shadow-md px-3 bg-white md:w-[470px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="pb-10">
          <h6 className="mb-10 text-2xl">Login</h6>
          <form action="">
            <div className=" mb-4 focus-within:border-primary rounded-sm">
              <input
                type="text"
                name="userId"
                placeholder="UserId"
                className={`w-full outline-none py-1 px-3 rounded-sm border focus:border-primary ${
                  error.userId != "" && error.userId != undefined
                    ? "border-red-600"
                    : ""
                }`}
                value={value.userId}
                onChange={handleSetValue}
                onBlur={() => setError(validate("userId"))}
                required
              />
              <span className="text-red-600 text-[12px]">{error.userId}</span>
            </div>

            <div className=" mb-4  rounded-sm">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`w-full outline-none py-1 px-3 rounded-sm border focus:border-primary ${
                  error.password != "" && error.userId != undefined
                    ? "border-red-600"
                    : ""
                }`}
                value={value.password}
                onChange={handleSetValue}
                onBlur={() => setError(validate())}
                required
              />
              <span className="text-red-600 text-[12px]">{error.password}</span>
            </div>

            <FlexBetweenCenter className="mb-2 text-sm">
              <div className="flex gap-2 items-center">
                <label>Remember Me</label> <input type="checkbox" />
              </div>
              <Link className="text-secondry">Forgot Password?</Link>
            </FlexBetweenCenter>

            <div className="mb-5">
              <MyButton
                size="sm"
                className={`w-full`}
                bgColor="bg-secondry"
                type="submit"
              >
                Login
              </MyButton>
            </div>

            <div className="text-center">
              <p>You Don't have account?</p>
              <Link className="text-secondry">Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
