"use client";

import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { useAppSelector } from "@/redux/hooks";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const user = useAppSelector((state) => state.auth.user);

  const router = useRouter();
  const handleSignInBtnClick = () => {
    router.push("/sign-in");
  };
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "Home ",
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
    <nav className={cn("flex items-center space-x-4 lg:space-x-32", className)}>
      {routes.map((route) => (
        <Link
          href={route.href}
          className={
            (cn("transition-all hover:text-primary "),
            route.active ? " text-white border-b-2 py-2" : "text-white")
          }
          key={route.href}
        >
          {route.label}
        </Link>
      ))}

      <Button className="font-medium text-xl">
        {user ? user.username : "Sign In"}
      </Button>
      <Button
        onClick={handleSignInBtnClick}
        className="bg-white font-medium text-xl text-primary  hover:bg-slate-200"
      >
        Sign Up
      </Button>

      <div className="text-white">
        <ShoppingCart />
      </div>
    </nav>
  );
}
