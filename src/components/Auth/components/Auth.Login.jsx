"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";

export const AuthLogin = () => {
  const { isLoading, loginDataUser, handleChange, handlingSubmitLogin } =
    useLogin();

  return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className="bg-gradient-to-tr from-red-400 to-yellow-400"></div>
      <div className="flex justify-center items-center">
        <div className="w-[320px] space-y-3">
          <Input
            name="email"
            placeholder="put your email here"
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="put your password here"
            onChange={handleChange}
          />
          <Button
            isLoading={isLoading}
            onClick={handlingSubmitLogin}
            className=" bg-gradient-to-tr from-red-400 to-yellow-400 text-white"
          >
            Login
          </Button>
          <label className="ml-2 text-sm font-medium text-gray-500 ">
            Don't have an account?
            <a
              href="/register"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign Up
            </a>
          </label>
        </div>
      </div>
    </main>
  );
};
