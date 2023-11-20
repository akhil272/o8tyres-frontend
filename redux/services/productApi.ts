import {
  ApiResponse,
  TyreProduct,
  TyreProductApiResponse,
  TyreSize,
  VehicleModel,
} from "../types";
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
    findTyreProducts: builder.query<
      ApiResponse<TyreProductApiResponse>,
      {
        page: number;
        size: number;
        vehicleModelId?: number;
        tyreSizeId?: number;
      }
    >({
      query: (arg) => {
        const { page, size, vehicleModelId, tyreSizeId } = arg;
        let url = `/tyre-products?&page=${page}&size=${size}`;
        if (vehicleModelId) {
          url += `&vehicleModelId=${vehicleModelId}`;
        }
        if (tyreSizeId) {
          url += `&tyreSizeId=${tyreSizeId}`;
        }
        return {
          url,
        };
      },
    }),
    findTyreProductById: builder.query<
      ApiResponse<TyreProduct>,
      { productId: number }
    >({
      query: ({ productId }) => `/tyre-products/${productId}`,
    }),
  }),
});

export const {
  useFindVehicleModelsQuery,
  useFindTyreSizesQuery,
  useFindTyreProductsQuery,
  useFindTyreProductByIdQuery,
} = productApi;
