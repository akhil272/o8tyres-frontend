"use client";
import React from "react";

import { redirect, useRouter } from "next/navigation";
import { MainNav } from "./mainNav";
import { Button } from "./ui/button";
import MobileNav from "./mobileNav";

const Navbar = () => {
  const router = useRouter();
  const handleSignInBtnClick = () => {
    router.push("/sign-in");
  };
  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <div className="bg-primary md:flex hidden items-center md:px-8 px-2 md:h-28 h-20">
      <div className="flex items-center w-full">
        <h2
          onClick={handleLogoClick}
          className="text-white text-3xl w-1/2 font-semibold "
        >
          O8 TYRES
        </h2>
        <div className="space-x-2 hidden md:flex w-1/2">
          <div className="px-4 hidden md:flex">
            <MainNav className="text-xl font-semibold" />
          </div>
          <div className="flex  justify-end w-full">
            <Button className="font-medium text-xl">Log in</Button>
            <Button
              onClick={handleSignInBtnClick}
              className="bg-white font-medium text-xl text-primary  hover:bg-slate-200"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
