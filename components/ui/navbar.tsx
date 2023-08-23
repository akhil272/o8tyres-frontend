"use client";
import React from "react";

import { redirect, useRouter } from "next/navigation";
import { MainNav } from "./mainNav";
import { Button } from "./button";

const Navbar = () => {
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/sign-in");
  };
  return (
    <div className="border-b bg-primary flex items-center justify-around">
      <h2 className="text-white flex text-2xl ">O8 TYRES</h2>
      <div className="flex h-28 items-center px-4">
        <MainNav />
      </div>
      <div className="space-x-2">
        <Button>Log in</Button>
        <Button
          onClick={handleSignIn}
          className="bg-white rounded-3xl text-primary  hover:bg-slate-200"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
