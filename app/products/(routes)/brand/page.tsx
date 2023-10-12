import { Button } from "@/components/ui/button";
import React from "react";

const BrandPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
        <div className="p-4 m-2  bg-secondary">
          <div>Icon</div>
          <div>Brand Name</div>
        </div>
        <div className="p-4 m-2  bg-secondary">
          <div>Icon</div>
          <div>Brand Name</div>
        </div>
        <div className="p-4 m-2  bg-secondary">
          <div>Icon</div>
          <div>Brand Name</div>
        </div>
        <div className="p-4 m-2  bg-secondary">
          <div>Icon</div>
          <div>Brand Name</div>
        </div>
        <div className="p-4 m-2  bg-secondary">
          <div>Icon</div>
          <div>Brand Name</div>
        </div>
        <div className="p-4 m-2  bg-secondary">
          <div>Icon</div>
          <div>Brand Name</div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Button>Skip & Continue</Button>
      </div>
    </div>
  );
};

export default BrandPage;
