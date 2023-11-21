"use client";

import React, { useState } from "react";

import Link from "next/link";
import SignUpFormCustomer from "@/components/form/SignUpFormCustomer";
import SignUpFormBusiness from "@/components/form/SignUpFormBusiness";

const SignUpPage = () => {
  const [userTypeCustomer, setUserTypeCustomer] = useState<boolean>(true);
  return (
    <div className="overflow-auto">
      <div
        onClick={() => setUserTypeCustomer(!userTypeCustomer)}
        className="flex justify-end"
      >
        Sign Up as {userTypeCustomer ? "business entity" : "customer"}
      </div>
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <p>
        Have an account?{" "}
        <Link className="font-extrabold" href="/sign-in">
          Sign In
        </Link>
      </p>
      <div className="py-4 w-full ">
        {userTypeCustomer ? <SignUpFormCustomer /> : <SignUpFormBusiness />}
      </div>
    </div>
  );
};

export default SignUpPage;
