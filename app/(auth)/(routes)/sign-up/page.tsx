"use client";

import React from "react";

import Link from "next/link";
import SignUpFormUser from "@/components/form/SignUpFormUser";

const SignUpPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <p>
        Have an account?{" "}
        <Link className="font-extrabold" href="/sign-in">
          Sign In
        </Link>
      </p>
      <div className="py-4 w-full">
        <SignUpFormUser />
      </div>
    </div>
  );
};

export default SignUpPage;
