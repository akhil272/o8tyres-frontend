import Link from "next/link";
import React from "react";

const BrandHomeCard = () => {
  return (
    <div className="w-64 h-20 bg-white rounded-md p-8">
      <div>Icon</div>
      <Link href="/">BrandName</Link>
    </div>
  );
};

export default BrandHomeCard;
