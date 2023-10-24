import React from "react";
import UserRating from "./UserRating";

const CustomerTyreReviewCard = () => {
  return (
    <div className="bg-secondary p-4 w-full rounded-md flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex-col flex">
          <label className="font-semibold text-xl">Anand Jolly</label>
          <label className="font-medium">Hyundai Creta</label>
        </div>
        <div className="flex-col flex">
          <label className="w-20 h-6">
            <UserRating rating={4} />
          </label>
          <label>30 Sept 2023</label>
        </div>
      </div>
      <div>
        The quality of the tyres amazing, the ride quality improved, the grib in
        wet weather amazing, great service from ats. Have recommended to family
        and friends. Thank you
      </div>
    </div>
  );
};

export default CustomerTyreReviewCard;
