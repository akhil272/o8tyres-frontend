import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import CartLineItem from "./CartLineItem";
import { useRouter } from "next/navigation";

const CartItemSheet = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const router = useRouter();
  const onClickProceedToCart = () => {
    router.push("/my-cart");
  };
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex relative">
          <ShoppingCart className="h-10 w-10" />
          {cart.length > 0 && (
            <div className="rounded-full right-0 absolute bg-white w-6 h-6 text-primary">
              <div className="item-center justify-center p-1 flex text-xs">
                {cart.length}
              </div>
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="h-full flex  flex-col justify-between bg-secondary">
        <div>
          <SheetHeader className="border-b-4">
            <SheetTitle>Items in your cart</SheetTitle>
          </SheetHeader>
          {cart.length > 0 ? (
            <div className="grid gap-4 py-4">
              {cart?.map((tyreProduct) => (
                <CartLineItem key={tyreProduct.id} tyreProduct={tyreProduct} />
              ))}
            </div>
          ) : (
            "Nothing in your cart"
          )}
        </div>
        <div>
          <div className="border-t-4 text-xl py-2 justify-between w-full flex font-bold">
            <label>Total</label>
            <label>Rs 36,910</label>
          </div>
          <div className="border-b-4 mb-4" />
          <SheetFooter>
            <div className="flex flex-col w-full space-y-2">
              <SheetClose asChild>
                <Button onClick={onClickProceedToCart} type="submit">
                  Proceed To Cart
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant={"link"} type="submit">
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartItemSheet;
