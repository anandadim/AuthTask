"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";

export const Splash = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Hello there!</h1>
      <div className="mt-8 flex justify-end">
        <div className="mx-4">
          <Link href="/register">
            <Button
              className="w-full bg-gradient-to-tr from-red-400 to-yellow-400 text-white shadow-lg"
              color="success"
            >
              Please Sign Up
            </Button>
          </Link>
        </div>

        <div className="mx-4 flex flex-col">
          <Link href="/login">
            <Button
              className="w-full bg-gradient-to-tr from-red-400 to-yellow-400 text-white shadow-lg"
              color="success"
            >
              Please Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
