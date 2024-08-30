import React from "react";
import { FlexBetweenCenter, MyButton, P } from "../index";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-5 rounded-md mb-5 shadow-md px-3 bg-white">
      <div className="pb-10">
        <h6 className="mb-10 text-2xl">Login</h6>
        <form action="">
          <div className="border mb-4 focus-within:border-primary rounded-sm">
            <input
              type="text"
              placeholder="UserId"
              className="w-full outline-none py-1 px-3 rounded-sm"
            />
          </div>

          <div className="border mb-4 focus-within:border-primary rounded-sm">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none py-1 px-3 rounded-sm"
            />
          </div>

          <FlexBetweenCenter className="mb-2 text-sm">
            <div className="flex gap-2 items-center">
              <lable>Remember Me</lable> <input type="checkbox" />
            </div>
            <Link className="text-secondry">Forgot Password?</Link>
          </FlexBetweenCenter>

          <div className="mb-5">
            <MyButton size="sm" className={`w-full`} bgColor="bg-secondry">
              Login
            </MyButton>
          </div>

          <div className="text-center text-sm">
            <p>You Don't have account?</p>
            <Link className="text-secondry">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
