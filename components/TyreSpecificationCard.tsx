import React from "react";
interface TyreSpecificationProps {
  specification: {
    width: number;
    profile: number;
    rimSize: number;
    loadIndex: number;
    speedRating: string;
    weight: number;
    maxLoad: number;
    constructionType: string;
    tubeless: true;
  };
}
const TyreSpecificationCard = ({ specification }: TyreSpecificationProps) => {
  return (
    <div className=" md:gap-x-4 md:flex-row flex-col  gap-y-4 flex ">
      <div className="bg-secondary p-4 w-full rounded-md">
        <div className="grid grid-cols-2 gap-2">
          <label>Width</label>
          <label>{specification.width}</label>
          <label>Profile</label>
          <label>{specification.profile}</label>
          <label>Rim</label>
          <label>{specification.rimSize}</label>
          <label>Load Index</label>
          <label>{specification.loadIndex}</label>
          <label>Speed Rating</label>
          <label>{specification.speedRating}</label>
        </div>
      </div>
      <div className="bg-secondary p-4 w-full rounded-md">
        <div className="grid grid-cols-2 gap-2">
          <label>Tyre Weight</label>
          <label>{specification.weight}kg (Approx)</label>
          <label>Maximum Load</label>
          <label>{specification.maxLoad}</label>
          <label>Construction Type</label>
          <label>{specification.constructionType}</label>
          <label>Tubeless</label>
          <label>{specification.tubeless ? "True" : "False"}</label>
          <label>Category</label>
          <label>Car Tyre</label>
        </div>
      </div>
    </div>
  );
};

export default TyreSpecificationCard;
