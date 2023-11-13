import { ApiResponse, TyreSize, VehicleModel } from "../types";
import { api } from "./api";

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ["Products"] });
export const productApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    findVehicleModels: builder.query<ApiResponse<VehicleModel[]>, null>({
      query: () => "/vehicle-models",
    }),
    findTyreSizes: builder.query<ApiResponse<TyreSize[]>, null>({
      query: () => "/tyre-sizes",
    }),
  }),
});

export const { useFindVehicleModelsQuery, useFindTyreSizesQuery } = productApi;
