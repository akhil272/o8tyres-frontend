import { VehicleModel } from "@/redux/types";
import React from "react";

interface VehicleCompatibilityCardProps {
  vehicleModels: VehicleModel[];
}

const VehicleCompatibilityCard = ({
  vehicleModels,
}: VehicleCompatibilityCardProps) => {
  return (
    <div className="bg-secondary p-4 w-full rounded-md">
      <div className="flex">
        {vehicleModels.map((model, index) => (
          <React.Fragment key={model.id}>
            <label>{model.model}</label>
            {index < vehicleModels.length - 1 && <label>, </label>}
          </React.Fragment>
        ))}
        <label>.</label>
      </div>
    </div>
  );
};

export default VehicleCompatibilityCard;
