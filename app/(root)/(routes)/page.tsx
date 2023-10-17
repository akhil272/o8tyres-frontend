"use client";
import React, { useState } from "react";
import BrandHomeCard from "@/components/brandHomeCard";
import { SearchBar } from "@/components/searchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="lg:h-[640px] h-[320px] w-full relative">
        <Image
          className="object-cover"
          src="https://img.freepik.com/free-photo/mechanic-changing-tires-car-service_1303-26894.jpg?w=1380&t=st=1692931729~exp=1692932329~hmac=2aac0d26570044e15302ed3ab612ce3f82a780cebd703bf45d98f5f22b7fbf7a"
          alt="home-cover"
          fill={true}
        />
      </div>
      <div className="flex py-8 justify-center">
        <div className="lg:w-3/4  w-full px-8 lg:px-0 md:flex md:space-x-4 space-y-8 md:space-y-0">
          <div className="md:w-1/2 md:space-y-4 space-y-2">
            <h4 className="text-3xl font-bold">Find Your Tyre</h4>
            <div className="space-y-2 md:space-y-4 xl:w-1/2 pb-2">
              <SearchBar
                data={carModels}
                placeholder="car model"
                setSearchTerm={setSearchTerm}
              />
              <p>Or</p>
              <SearchBar
                data={tyreSizes}
                placeholder="tyre size"
                enableContactOffline={true}
                setSearchTerm={setSearchTerm}
              />
            </div>

            <Button onClick={onClickContinue} className="w-full xl:w-1/2">
              Continue
            </Button>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-3xl font-bold">Talk To Expert</h4>
            <div className="flex flex-col items-start ">
              <Button
                className="px-0 text-xl font-medium"
                onClick={onClickCall}
                variant="link"
              >
                Call
              </Button>
              <Button className="px-0 text-xl font-medium" variant="link">
                Assistant
              </Button>
              <Button
                className="px-0 text-xl font-medium"
                onClick={onClickWhatsApp}
                variant="link"
              >
                WhatsApp Message
              </Button>
              <Button
                className="px-0 text-xl font-medium"
                onClick={onClickWhatsApp}
                variant="link"
              >
                WhatsApp Video Call
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-8 bg-secondary">
        <div className="lg:w-3/4  w-full px-8 lg:px-0 md:flex md:space-x-4 space-y-8 md:space-y-0">
          <div className="md:w-1/2 md:space-y-4 space-y-2">
            <BrandHomeCard />
          </div>
        </div>
      </div>
      <div className="flex py-8 flex-col space-y-8 items-center">
        <h5 className="text-2xl font-medium">How does O8 Tyres Work?</h5>
        <div className="flex flex-col space-y-10 justify-start w-1/2">
          <div>
            <div className="text-lg font-medium">
              1. Choose your tyres online
            </div>
            <p>
              We stock a wide range of tyres for all vehicle categories and our
              dedicated team of experts endeavour to provide our customers with
              the latest tyre models. Meaning there should always be a relevant
              tyre for you in our catalogue.
            </p>
          </div>
          <div>
            <div className="text-lg font-medium">
              2. Get it shipped at your doorstep or drive into our fitting
              partners
            </div>
            <p>
              Get your tyres shipped at your doorstep or drive into our fitting
              partners across India.
            </p>
          </div>
          <div>
            <div className="text-lg font-medium">3. Secure online payment</div>
            <p>
              We take your personal data very seriously and ensure that our
              system complies with the latest in retail safety protocols – to
              safeguard any banking or personal data in our system.
            </p>
          </div>
        </div>
        <h5 className="text-2xl font-medium">Testimonials</h5>
        <div className="italic">
          “Online tyre shopping never been this easy. Brilliant service and
          completive pricing. Had a great experience with O8 tyres. Would easily
          recommend this to anyone.”
        </div>
        <h5 className="text-2xl font-medium">Frequent Asked Questions</h5>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Which is correct, tyre or tire?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is it better to buy tyres online?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What tyres do I need?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default HomePage;
