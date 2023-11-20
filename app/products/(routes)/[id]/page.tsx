"use client";
import CustomerTyreReviewCard from "@/components/CustomerTyreReviewCard";
import OverallCustomerRating from "@/components/OverallCustomerRating";
import TyreSpecificationCard from "@/components/TyreSpecificationCard";
import TyreWarrantyCard from "@/components/TyreWarrantyCard";
import UserRating from "@/components/UserRating";
import VehicleCompatibilityCard from "@/components/VehicleCompatibilityCard";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useFindTyreProductByIdQuery } from "@/redux/services/productApi";
import { TyreProduct } from "@/redux/types";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = React.useState<number>(4);
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, error } = useFindTyreProductByIdQuery({
    productId: Number(id),
  });
  const onClickBack = () => {
    router.back();
  };
  const onClickNewSearch = () => {
    router.push("/search");
  };
  const onClickAddToCart = (tyreProduct: TyreProduct, quantity: number) => {
    dispatch(addToCart({ ...tyreProduct, cartQuantity: quantity }));
  };
  if (isLoading) return <div>Loading....</div>;
  const tyreProductDetail = data?.data;

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Button onClick={onClickBack} variant={"outline"}>
          Go Back
        </Button>
        <Button onClick={onClickNewSearch} className="hidden xl:block">
          New Search
        </Button>
      </div>
      {tyreProductDetail && (
        <>
          <div className="flex flex-col xl:flex-row py-8">
            <div className="relative w-80 h-80 ">
              <Image
                fill
                className="object-contain"
                alt="tyre-picture"
                src="/images/Primacy4ST.webp"
              />
            </div>
            <div className="w-full pt-4 xl:pt-0">
              <h1>Michelin</h1>
              <h2 className="font-semibold">
                {tyreProductDetail?.pattern.name}
              </h2>
              <h3 className="text-4xl font-bold py-2">
                {tyreProductDetail?.tyreSize.size}
              </h3>
              <div className="py-2 flex gap-4 items-center">
                <UserRating rating={4} />
                <span>4/5 (120 reviews)</span>
              </div>
              <p className="py-2">
                Introducing the Michelin Primacy 4 the tyre that will give you
                outstanding braking performance from the very first to the very
                last mile. No need to compromise on longevity as Primacy 4 will
                last 11,000 miles longer than its competitors, with an
                innovative new treadwear feature that will let you know when
                your tyres need changing. Crafted from the latest generation
                high performance rubber compound, the optimised sculpture and
                safety orientated design boosts performance.
              </p>
            </div>
          </div>
          <div className="w-full bg-secondary flex flex-col md:flex-row p-4 gap-4 rounded-md">
            <div className="md:w-2/3 flex gap-4 items-center md:justify-end ">
              <div className="flex flex-col">
                <label className="text-red-600 text-sm">Your saving 7%</label>
                <label className="line-through font-bold ">Rs 15,430</label>
              </div>
              <label className="text-3xl text-red-600 font-bold ">
                Rs 14,350
              </label>
            </div>
            <div className="xl:w-1/3 ">
              <div className="flex justify-between space-x-4 h-14">
                <input
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  defaultValue={4}
                  min={1}
                  max={30}
                  type="number"
                  className="p-2 w-1/5 bg-white rounded-md text-center"
                />
                <Button
                  onClick={() => onClickAddToCart(tyreProductDetail, quantity)}
                  className=" w-full h-full"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="py-4 ">
            <h4 className="font-semibold py-2">Specifications</h4>
            <div className=" md:gap-x-4 md:flex-row flex-col  gap-y-4 flex ">
              <TyreSpecificationCard />
              <TyreSpecificationCard />
            </div>
          </div>
          <div className="py-4 ">
            <h4 className="font-semibold py-2">Vehicle Compatibility</h4>
            <div className=" md:gap-x-4 md:flex-row flex-col  gap-y-4 flex ">
              <VehicleCompatibilityCard />
            </div>
          </div>
          <div className="py-4 ">
            <h4 className="font-semibold py-2">Warranty</h4>
            <div className=" md:gap-x-4 md:flex-row flex-col  gap-y-4 flex ">
              <TyreWarrantyCard />
            </div>
          </div>
          <div>
            <OverallCustomerRating />
            <div className="flex flex-col gap-4 py-4 ">
              <CustomerTyreReviewCard />
              <CustomerTyreReviewCard />
              <CustomerTyreReviewCard />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
