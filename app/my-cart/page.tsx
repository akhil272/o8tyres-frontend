"use client";
import { Button } from "@/components/ui/button";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  Table,
} from "@/components/ui/table";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  reset,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TyreProduct } from "@/redux/types";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SmallTyreProductCardProps {
  tyreProduct: TyreProduct;
}

const SmallTyreProductCard = ({ tyreProduct }: SmallTyreProductCardProps) => {
  return (
    <div className="p-4 bg-white rounded-lg flex space-x-4">
      <div className="h-32 w-32 relative">
        <Image
          src="/images/Primacy4ST.webp"
          fill
          className="object-fill"
          alt="tyre-image-cover"
        />
      </div>
      <div className="flex-col flex pt-4">
        <label className="text-sm">{tyreProduct.pattern.brand.name}</label>
        <label className="text-base font-medium">
          {tyreProduct.pattern.name}
        </label>
        <label className="text-3xl font-semibold py-2">
          {tyreProduct.tyreSize.size}
        </label>
      </div>
    </div>
  );
};

const MyCart = () => {
  const cartItem = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  console.log(cartItem, "cart item");
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
    <div className="flex justify-center xl:py-10 bg-secondary h-full">
      <div className="flex ">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl ">My Cart</h1>
          {cartItem.length > 0 ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-0  text-lg">
                      Product Details
                    </TableHead>
                    <TableHead className="text-medium text-lg">
                      Quantity
                    </TableHead>
                    <TableHead className="text-medium text-lg">Cost</TableHead>
                    <TableHead className="text-medium text-lg">
                      Discount
                    </TableHead>
                    <TableHead className="text-right text-lg">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItem.map((tyreProduct) => (
                    <TableRow
                      key={tyreProduct.id}
                      className="bg-white hover:bg-white"
                    >
                      <TableCell className="font-medium">
                        <SmallTyreProductCard tyreProduct={tyreProduct} />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center space-x-2">
                          <Minus
                            onClick={() => onClickMinus(tyreProduct.id)}
                            size={16}
                          />
                          <label className="bg-secondary px-4 rounded-lg py-1 text-xl font-medium">
                            {tyreProduct.cartQuantity}
                          </label>
                          <Plus
                            onClick={() => onClickPlus(tyreProduct.id)}
                            size={16}
                          />
                        </div>
                      </TableCell>
                      <TableCell>Rs 15,0000</TableCell>
                      <TableCell>Rs 2000</TableCell>
                      <TableCell className="text-right h-full ">
                        <div className=" flex relative flex-col justify-between items-center h-full">
                          <label>Rs 14000</label>
                          <Button
                            onClick={() => onClickDeleteProduct(tyreProduct.id)}
                            className="absolute top-10"
                            variant={"secondary"}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="w-full border-t-2 py-4 flex flex-col items-end">
                <div className="flex gap-4">
                  <label>SubTotal</label>
                  <label className="font-semibold">Rs 40,000</label>
                </div>
                <div className="flex gap-4">
                  <label>Discount</label>
                  <label className="font-semibold">-Rs 3,000</label>
                </div>
                <div className="flex gap-4">
                  <label>Taxes</label>
                  <label className="font-semibold">Rs 40,000</label>
                </div>
              </div>
              <div className="w-full border-t-2 py-4 flex flex-col items-end">
                <div className="flex gap-4">
                  <label className="font-bold">Total</label>
                  <label className="font-black text-red-600">Rs 40,000</label>
                </div>
              </div>
              <div className="w-full flex items-center">
                <div className="w-2/3">
                  Get Date Of Manufacture of tyres in the cart?{" "}
                  <Link className="underline font-bold" href={"/"}>
                    Click Here
                  </Link>
                </div>
                <Button size={"lg"} className="w-1/3 text-lg">
                  Proceed To Checkout
                </Button>
              </div>
            </>
          ) : (
            "No items"
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
