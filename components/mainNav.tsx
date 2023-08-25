"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
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
    <nav
      className={cn("flex items-center  space-x-4 lg:space-x-32", className)}
    >
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
    </nav>
  );
}
