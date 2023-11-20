"use client";
import { Button } from "@/components/ui/button";
import { removeItem, reset } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const MyCart = () => {
  const cartItem = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  console.log(cartItem, "cart item");
  return (
    <div>
      <h1>Cart Items</h1>
      {cartItem.map((item) => (
        <div key={item.id}>
          <h4 className="font-semibold text-xl">{item.tyreSize.size}</h4>{" "}
          <p>{item.cartQuantity}</p>
          <Button onClick={() => dispatch(removeItem(item.id))}>Remove</Button>
        </div>
      ))}
      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </div>
  );
};

export default MyCart;
