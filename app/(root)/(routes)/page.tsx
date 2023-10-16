"use client";
import BrandHomeCard from "@/components/brandHomeCard";
import { SearchBar } from "@/components/searchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const tyreSizes = [
  { label: "195/80 R15 89 V", value: "195/80 R15 89 V" },
  { label: "205/75 R16 91 H", value: "205/75 R16 91 H" },
  { label: "215/70 R17 93 W", value: "215/70 R17 93 W" },
  { label: "225/65 R18 95 Y", value: "225/65 R18 95 Y" },
  { label: "235/60 R19 97 Z", value: "235/60 R19 97 Z" },
  { label: "245/55 R20 99 A", value: "245/55 R20 99 A" },
  { label: "255/50 R21 101 B", value: "255/50 R21 101 B" },
  { label: "265/45 R22 103 C", value: "265/45 R22 103 C" },
  { label: "275/40 R23 105 D", value: "275/40 R23 105 D" },
  { label: "285/35 R24 107 E", value: "285/35 R24 107 E" },
];

const carModels = [
  { label: "Tata Sumo", value: "Tata Sumo" },
  { label: "Chevrolet Tavera", value: "Chevrolet Tavera" },
  {
    label: "Honda Amaze 2013",
    value: "Honda Amaze",
  },
  {
    label: "Honda City 1996",
    value: "Honda City",
  },
  {
    label: "Honda City Hybrid eHEV 2020",
    value: "Honda City Hybrid eHEV",
  },
  {
    label: "Honda Elevate 2023",
    value: "Honda Elevate",
  },
  {
    label: "Honda WR-V 2017",
    value: "Honda WR-V",
  },
  {
    label: "Honda Civic 1972",
    value: "Honda Civic",
  },
  {
    label: "Honda CR-V 1995",
    value: "Honda CR-V",
  },
  {
    label: "Honda Accord Hybrid 1976",
    value: "Honda Accord Hybrid",
  },
  { label: "Toyota Innova", value: "Toyota Innova" },
  { label: "Maruti Gypsy king", value: "Maruti Gypsy king" },
  { label: "Toyota Corolla", value: "Toyota Corolla" },
  { label: "Skoda", value: "Skoda" },
  {
    label: "Mahindra Bolero PikUp ExtraLong",
    value: "Mahindra Bolero PikUp ExtraLong",
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const onClickContinue = () => {
    router.push(`/products/search?query=${searchTerm}`);
  };
  const onClickCall = () => {
    window.location.href = "tel:+919745222566";
  };
  const onClickWhatsApp = () => {
    window.open("https://wa.me/+919745222566", "_blank");
  };
  return (
    <div>
      <div className="md:h-[640px] h-[380px] w-full relative">
        <Image
          className="object-cover"
          src="https://img.freepik.com/free-photo/mechanic-changing-tires-car-service_1303-26894.jpg?w=1380&t=st=1692931729~exp=1692932329~hmac=2aac0d26570044e15302ed3ab612ce3f82a780cebd703bf45d98f5f22b7fbf7a"
          alt="home-cover"
          fill={true}
        />
      </div>
      <div className="flex my-8 justify-center">
        <div className="md:w-3/4 md:flex md:space-x-4">
          <div className="md:w-1/2">
            <h4 className="text-2xl font-semibold my-2">Find Your Tyre</h4>
            <SearchBar
              data={carModels}
              placeholder="car model"
              setSearchTerm={setSearchTerm}
            />
            <p className="my-2">Or</p>
            <SearchBar
              data={tyreSizes}
              placeholder="tyre size"
              enableContactOffline={true}
              setSearchTerm={setSearchTerm}
            />
            <Button onClick={onClickContinue} className="mt-4">
              Continue
            </Button>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-2xl font-semibold my-2">Talk To Expert</h4>
            <div className="flex-col ">
              <div>
                <Button variant="link">Assistant </Button>
              </div>
              <div>
                <Button onClick={onClickCall} variant="link">
                  Call
                </Button>
              </div>
              <div>
                <Button onClick={onClickWhatsApp} variant="link">
                  WhatsApp Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 bg-primary-foreground space-y-10 ">
        <div className="flex w-full justify-center space-x-10 ">
          <BrandHomeCard />
          <BrandHomeCard />
          <BrandHomeCard />
          <BrandHomeCard />
        </div>
        <div className="flex w-full justify-center space-x-10 ">
          <BrandHomeCard />
          <BrandHomeCard />
          <BrandHomeCard />
          <BrandHomeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
