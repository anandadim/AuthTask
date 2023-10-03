"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">
        Hello there, This is the Dashboard!
      </h1>

      <div className="mt-8 flex justify-end">
        <div className="mx-4">
          <Link href="/login">
            <Button className=" bg-gradient-to-tr from-red-400 to-yellow-400 text-white">
              Log out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
