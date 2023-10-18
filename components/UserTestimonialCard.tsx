import Image from "next/image";
import React from "react";

const UserTestimonialCard = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center ">
      <div className="py-2 xl:py-0">
        <div className="relative h-20 w-20 rounded-md">
          <Image
            className="rounded-md"
            src="/images/customer-photo.jpg"
            alt="customer-picture"
            fill={true}
          />
        </div>
        <p className="pt-2 font-semibold"> Anand Jolly</p>
      </div>
      <p className="italic xl:px-4 ">
        <b className="text-xl">&quot;</b> Online tyre shopping never been this
        easy. Brilliant service and competitive pricing. Had a great experience
        with O8 tyres. Would easily recommend this to anyone.{" "}
        <b className="text-xl">&quot;</b>
      </p>
    </div>
  );
};

export default UserTestimonialCard;
