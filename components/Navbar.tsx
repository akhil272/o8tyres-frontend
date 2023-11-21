"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileNav from "./mobileNav";
import { useAppSelector } from "@/redux/hooks";
import { AccountDropDownMenu } from "./AccountDropDownMenu";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart.cart);

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
              <h1 className="text-3xl lg:text-4xl font-bold ">O8 TYRES</h1>
            </Link>
            <div onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X /> : <Menu className="h-8 w-8" />}
            </div>
          </div>
          <div className=" justify-end ">
            {open && (
              <MobileNav routes={routes} open={open} setOpen={setOpen} />
            )}
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

          <div
            className="flex relative"
            onClick={() => router.push("/my-cart")}
          >
            <ShoppingCart className="h-10 w-10" />
            {cart.length > 0 && (
              <div className="rounded-full right-0 absolute bg-white w-6 h-6 text-primary">
                <div className="item-center justify-center p-1 flex text-xs">
                  {cart.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
