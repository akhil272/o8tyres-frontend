import Link from "next/link";
import React from "react";

const routes = [
  {
    href: `/`,
    label: "Home",
  },
  {
    href: `/offers`,
    label: "Offers",
  },
  {
    href: `/about`,
    label: "About",
  },
  {
    href: `/contact`,
    label: "Contact",
  },
];

const MobileNav = ({ open, setOpen }: any) => {
  return (
    <div
      className=" w-[100svw] h-[100svh] text-xl font-medium "
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-col h-full justify-between px-6">
        <ul className="flex items-end flex-col w-full  space-y-8 ">
          <div className="w-full flex justify-end pt-4 items-end border-b-2">
            <h4 className="py-2">
              Hello, <b>Anand</b>
            </h4>
          </div>
          {routes?.map((route) => (
            <Link href={route.href} key={route.href}>
              {route.label}
            </Link>
          ))}
        </ul>
        <div className="w-full flex flex-col space-y-4 justify-end items-end border-t-2 py-4">
          <div>Your Account</div>
          <div>Your Orders</div>
          <div className="w-full flex flex-col space-y-4 justify-end items-end border-t-2 py-4">
            <div>Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
