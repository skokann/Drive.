import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <>
      <div className="flex w-full justify-center items-center h-screen ">
        <SignUp />
      </div>
    </>
  );
}
