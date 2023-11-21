import {
  CartItem,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/features/cartSlice";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";

interface CartLineItemProps {
  tyreProduct: CartItem;
}

const CartLineItem = ({ tyreProduct }: CartLineItemProps) => {
  const dispatch = useAppDispatch();
  const onClickMinus = (id: number) => {
    dispatch(decrementQuantity(id));
  };
  const onClickPlus = (id: number) => {
    dispatch(incrementQuantity(id));
  };
  const onClickDeleteProduct = (id: number) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="bg-white my-4 rounded-lg p-2">
      <div className="flex py-4">
        <div className="h-40 w-40 relative">
          <Image
            src="/images/Primacy4ST.webp"
            fill
            className="object-fill"
            alt="tyre-image-cover"
          />
        </div>
        <div className="flex-col w-3/5 flex ">
          <label className="text-sm">{tyreProduct.pattern.brand.name}</label>
          <label className="text-base font-medium">
            {tyreProduct.pattern.name}
          </label>
          <label className="text-xl font-semibold py-2">
            {tyreProduct.tyreSize.size}
          </label>
          <div>
            <div className="flex items-center justify-start space-x-2">
              <Minus onClick={() => onClickMinus(tyreProduct.id)} size={16} />
              <label className="bg-secondary px-4 rounded-lg py-1 text-xl font-medium">
                {tyreProduct.cartQuantity}
              </label>
              <Plus onClick={() => onClickPlus(tyreProduct.id)} size={16} />
            </div>
          </div>
          <div className="flex py-4 space-x-2">
            <div>
              <div className="line-through">Rs 15,350</div>
              <div className="text-red-600 font-semibold">Rs 14,350</div>
            </div>
            <div className="-space-y-2">
              <label className="text-xs">Your Discount</label>
              <div className="text-red-600 text-sm font-semibold">10%</div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button
              size={"sm"}
              className="w-1/2 flex"
              onClick={() => onClickDeleteProduct(tyreProduct.id)}
              variant={"secondary"}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLineItem;
