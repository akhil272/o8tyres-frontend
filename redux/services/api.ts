import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";
import { ApiResponse, RefreshSuccessResponse } from "../types";

// Base query with headers
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set("content-type", "application/json");
    const { accessToken } = (getState() as RootState).auth;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

// Custom fetch base query with token refresh logic
const customFetchBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const { refreshToken } = (api.getState() as RootState).auth;
    try {
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh-token",
          method: "POST",
          body: JSON.stringify({
            refreshToken,
          }),
        },
        api,
        extraOptions
      );

      const response =
        refreshResult.data as ApiResponse<RefreshSuccessResponse>;
      if (response) {
        api.dispatch({
          type: "auth/setUserAndToken",
          payload: {
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          },
        });
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Handle refresh token failure here
        // api.dispatch(setCurrentUser(null));
      }
    } catch (error) {
      // Handle network errors here
    }
  }
  return result;
};

// Create API
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Auth", "Products", "Users"],
  refetchOnFocus: true,
  baseQuery: customFetchBaseQuery,
  endpoints: () => ({}),
});
