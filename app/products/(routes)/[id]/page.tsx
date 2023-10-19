"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Button onClick={() => router.back()} variant={"outline"}>
          Go Back
        </Button>
        <Button className="hidden xl:block">New Search</Button>
      </div>
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
          <h2 className="font-semibold">Primacy 4ST</h2>
          <h3 className="text-4xl font-bold py-2">225/55 R16 99 W</h3>
          <div>***** 4/5 (120 reviews)</div>
          <p className="py-2">
            Introducing the Michelin Primacy 4 the tyre that will give you
            outstanding braking performance from the very first to the very last
            mile. No need to compromise on longevity as Primacy 4 will last
            11,000 miles longer than its competitors, with an innovative new
            treadwear feature that will let you know when your tyres need
            changing. Crafted from the latest generation high performance rubber
            compound, the optimised sculpture and safety orientated design
            boosts performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
