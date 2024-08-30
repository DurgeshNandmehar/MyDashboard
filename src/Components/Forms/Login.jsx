import React from "react";
import { FlexBetweenCenter, MyButton, P } from "../index";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-5 rounded-md mb-5 shadow-md p-2">
      <div className="pb-10">
        <h6 className="mb-10 text-2xl">Login</h6>
        <form action="">
          <div className="border mb-3">
            <input
              type="text"
              placeholder="UserId"
              className="w-full outline-none py-1 px-3"
            />
          </div>

          <div className="border mb-3">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none py-1 px-3"
            />
          </div>

          <FlexBetweenCenter className="mb-2 text-sm">
            <div className="flex gap-2 items-center">
              <lable>Remember Me</lable> <input type="checkbox" />
            </div>
            <Link className="text-secondry">Forgot Password?</Link>
          </FlexBetweenCenter>

          <div className="mb-2">
            <MyButton size="sm" className={`w-full`} bgColor="bg-secondry">
              Login
            </MyButton>
          </div>

          <P>
            Don't have account?
            <Link className="text-secondry">Create Account</Link>
          </P>
        </form>
      </div>
    </div>
  );
};

export default Login;
