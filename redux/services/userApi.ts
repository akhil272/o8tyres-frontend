import { ApiResponse, PinCode } from "../types";
import { api } from "./api";

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ["Users"] });
export const userApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    findPinCodes: builder.query<ApiResponse<PinCode[]>, null>({
      query: () => "/users/pin-codes",
    }),
  }),
});

export const { useFindPinCodesQuery } = userApi;
