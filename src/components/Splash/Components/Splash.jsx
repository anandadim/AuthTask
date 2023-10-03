"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/UI/Button";

export const Splash = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Hello there!</h1>

      <div className="mt-8 flex justify-end">
        <div className="mx-4">
          <Link href="/register">
            <Button className="w-full">Please Sign Up</Button>
          </Link>
        </div>

        <div className="mx-4 flex flex-col">
          <Link href="/login">
            <Button className="w-full">Please Log In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
