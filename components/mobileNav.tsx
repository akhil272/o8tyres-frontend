import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface MobileNavProps {
  routes: { href: string; label: string; active?: boolean }[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const authRoutes = [
  {
    href: `/sign-in`,
    label: "Sign In",
  },
  {
    href: `/sign-up`,
    label: "Sign Up",
  },
];
const cartRoutes = [
  {
    href: `/my-cart`,
    label: "My Cart",
  },
];

const MobileNav = ({ routes, open, setOpen }: MobileNavProps) => {
  const user = useAppSelector((state) => state.auth.user);
  let mobileRoutes = [];
  if (user) {
    mobileRoutes = [...routes, ...cartRoutes];
  } else {
    mobileRoutes = [...routes, ...authRoutes, ...cartRoutes];
  }
  return (
    <div className="text-xl font-medium" onClick={() => setOpen(!open)}>
      <div className="flex flex-col space-y-4 px-2">
        <ul className="flex items-end flex-col w-full  space-y-4 ">
          {user && (
            <div className="w-full flex justify-end  items-end border-b-2">
              <h4 className="py-2">
                Hello, <b>{user.username}</b>
              </h4>
            </div>
          )}
          {mobileRoutes?.map((route) => (
            <Link href={route.href} key={route.href}>
              {route.label}
            </Link>
          ))}
        </ul>
        {user && (
          <div className="w-full flex flex-col space-y-4 justify-end items-end border-t-2 py-4">
            <div>Your Account</div>
            <div>Your Orders</div>
            <div className="w-full flex flex-col space-y-4 justify-end items-end border-t-2 py-4">
              <div>Sign Out</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
