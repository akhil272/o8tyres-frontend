"use client";
import React, { useState } from "react";

import { redirect, useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileNav from "./mobileNav";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const handleSignInBtnClick = () => {
    router.push("/sign-in");
  };
  const handleLogoClick = () => {
    router.push("/");
  };
  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/offers`,
      label: "Offers",
      active: pathname === `/offers`,
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
    },
    {
      href: `/contact`,
      label: "Contact",
      active: pathname === `/contact`,
    },
  ];
  return (
    <nav className="w-full bg-primary text-primary-foreground py-4 md:px-16 px-4">
      <div className="flex md:flex-row flex-col justify-between ">
        <div className="w-full md:w-auto">
          <div className="flex px-6 items-center justify-between">
            <Link href="/">
              <h1 className="text-4xl font-semibold">OOZE</h1>
            </Link>
            <div onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X /> : <Menu />}
            </div>
          </div>
          <div className="flex justify-end ">
            {open && <MobileNav route={routes} open={open} setOpen={setOpen} />}
          </div>
        </div>
        <div className="hidden lg:flex space-x-20 items-center text-xl font-medium">
          {routes.map((route) => (
            <Link
              href={route.href}
              className={
                (cn("transition-all"), route.active ? "border-b-2  " : "")
              }
              key={route.href}
            >
              {route.label}
            </Link>
          ))}
          <div className="flex space-x-4 items-center ">
            <div onClick={() => router.push("/sign-in")}>Sign In</div>
            <Button
              onClick={() => router.push("/sign-up")}
              variant="secondary"
              className="text-xl"
            >
              Sign Up
            </Button>
          </div>
          <div onClick={() => router.push("/my-cart")}>
            <ShoppingCart className="h-10 w-10" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
