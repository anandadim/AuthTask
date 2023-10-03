import Link from "next/link";
import React from "react";
import { Button } from "@/components/UI/Button";

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">
        Hello there, This is the Dashboard!
      </h1>

      <div className="mt-8 flex justify-end">
        <div className="mx-4">
          <Link href="/login">
            <Button className="w-full">Log out</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
