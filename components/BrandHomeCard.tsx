import Link from "next/link";
import Image from "next/image";
import React from "react";

interface BrandHomeCardProps {
  name: string;
  logoSrc: string;
}

const BrandHomeCard = ({ name, logoSrc }: BrandHomeCardProps) => {
  return (
    <div className=" bg-white rounded-md xl:p-4 px-2 py-2 items-center flex flex-col w-40 md:w-60 xl:w-full ">
      <div className="relative w-full h-8 xl:h-12 ">
        <Image
          className="object-contain"
          fill
          alt="brand-logos"
          src={`/images/TyreBrandLogos/${logoSrc}`}
        />
      </div>
      <Link
        className="xl:text-lg text-sm underline underline-offset-4 font-medium"
        href="/"
      >
        {name}
      </Link>
    </div>
  );
};

export default BrandHomeCard;
