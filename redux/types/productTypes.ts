export type VehicleModel = {
  id: number;
  model: string;
  vehicleType: string;
};
export type TyreSize = {
  id: number;
  size: string;
};

export type TyreProduct = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  description: string;
  subCategory: {
    id: number;
    name: string;
    category: {
      id: number;
      name: string;
    };
  };
  pattern: {
    id: number;
    name: string;
    brand: {
      id: number;
      name: string;
    };
  };
  tyreSize: {
    id: number;
    size: string;
    vehicleModels: [
      {
        id: number;
        model: string;
        vehicleType: string;
      }
    ];
  };
  tyreSpecification: {
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
};

export type TyreProductApiResponse = {
  tyreProducts: TyreProduct[];
};
