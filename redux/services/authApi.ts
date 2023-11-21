import {
  ApiResponse,
  SignInPayload,
  SignSuccessResponse,
  SignUpBusinessPayload,
  SignUpCustomerPayload,
} from "../types";
import { setUserAndToken } from "../features/authSlice";
import { api } from "./api";

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ["Auth"] });
export const authApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<ApiResponse<SignSuccessResponse>, SignInPayload>({
      query(data: SignInPayload) {
        return {
          url: "/auth/sign-in",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken, refreshToken, user } = data.data;
          dispatch(setUserAndToken({ accessToken, refreshToken, user }));
        } catch (error) {
          console.log("Failed to set tokens");
        }
      },
    }),
    signUpCustomer: builder.mutation<
      ApiResponse<SignSuccessResponse>,
      SignUpCustomerPayload
    >({
      query(data: SignUpCustomerPayload) {
        return {
          url: "/auth/sign-up/customer",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken, refreshToken, user } = data.data;
          dispatch(setUserAndToken({ accessToken, refreshToken, user }));
        } catch (error) {
          console.log("Failed to set tokens");
        }
      },
    }),
    signUpBusiness: builder.mutation<
      ApiResponse<SignSuccessResponse>,
      SignUpBusinessPayload
    >({
      query(data: SignUpBusinessPayload) {
        return {
          url: "/auth/sign-up/business",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken, refreshToken, user } = data.data;
          dispatch(setUserAndToken({ accessToken, refreshToken, user }));
        } catch (error) {
          console.log("Failed to set tokens");
        }
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpCustomerMutation,
  useSignUpBusinessMutation,
} = authApi;
