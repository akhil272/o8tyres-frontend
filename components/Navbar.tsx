"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { AccountDropDownMenu } from "./AccountDropDownMenu";
import CartItemSheet from "./CartItemSheet";
import MenuItemSheet from "./MenuItemSheet";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const pathname = usePathname();

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
  console.log(user, "user");
  return (
    <nav className="w-full bg-primary text-primary-foreground md:py-4 py-2 xl:px-16 md:px-8 px-4">
      <div className="flex md:flex-row flex-col justify-between ">
        <div className="w-full lg:w-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl lg:text-4xl font-bold ">O8 TYRES</h1>
            </Link>
            <MenuItemSheet routes={routes} />
          </div>
        </div>
        <div className="hidden lg:flex xl:space-x-20 md:space-x-10 items-center text-xl font-medium">
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
          {user ? (
            <div className="flex items-center ">
              {user.username}
              <AccountDropDownMenu />
            </div>
          ) : (
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
          )}
          <CartItemSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
