import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { signOutUser } from "@/redux/features/authSlice";
import { persistor } from "@/redux/store";

interface MenuItemSheetProps {
  routes: { href: string; label: string; active: boolean }[];
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

const MenuItemSheet = ({ routes }: MenuItemSheetProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const onClickSignOut = () => {
    dispatch(signOutUser());
    persistor.purge();
  };
  let mobileRoutes = [];
  if (user) {
    mobileRoutes = [...routes, ...cartRoutes];
  } else {
    mobileRoutes = [...routes, ...authRoutes, ...cartRoutes];
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-8 w-8 lg:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-primary text-white justify-between flex flex-col">
        <div className="py-10">
          <SheetHeader>
            <SheetTitle className="text-white justify-end flex">
              {user && (
                <div className="py-2 border-b-2">
                  <label className="font-light text-2xl">Hello, </label>
                  <label className="font-semibold text-2xl">
                    {user.username}
                  </label>
                </div>
              )}
            </SheetTitle>
          </SheetHeader>
          <div className="flex items-end flex-col w-full py-4 space-y-4 ">
            {mobileRoutes?.map((route) => (
              <div key={route.href}>
                <SheetClose asChild>
                  <Link className="text-xl font-medium" href={route.href}>
                    {route.label}
                  </Link>
                </SheetClose>
              </div>
            ))}
          </div>
        </div>
        <div>
          {user && (
            <div className="w-full flex flex-col text-xl font-medium space-y-4 justify-end items-end border-t-2 py-4">
              <div>Your Account</div>
              <div>Your Orders</div>
            </div>
          )}
          {user && (
            <SheetFooter>
              <SheetClose asChild>
                <div className="w-full flex flex-col  justify-end items-end border-t-2 pt-4">
                  <Button
                    variant={"link"}
                    className="text-white text-xl font-medium px-0"
                    type="submit"
                    onClick={onClickSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              </SheetClose>
            </SheetFooter>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuItemSheet;
