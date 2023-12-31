"use client";

// import Link from "next/link";
import { Input, Button } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export const AuhtRegister = () => {
  const { handleChange, handlingSubmitRegister } = useRegister();

  return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="w-[320px] space-y-3">
          <Input
            name="name"
            placeholder="put your name here"
            onChange={handleChange}
          />
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
            onClick={handlingSubmitRegister}
            className=" bg-gradient-to-tr from-red-400 to-yellow-400 text-white"
          >
            Register
          </Button>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-red-400 to-yellow-400"></div>
    </main>
  );
};
