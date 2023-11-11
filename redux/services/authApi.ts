import { ApiResponse, SignInPayload, SignSuccessResponse } from "../types";
import { setUserAndToken } from "../features/authSlice";
import { api } from "./api";

interface SignInForm {
  email: string;
  password: string;
}

const apiWithTags = api.enhanceEndpoints({ addTagTypes: ["Auth"] });
export const authApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<ApiResponse<SignSuccessResponse>, SignInPayload>({
      query(data: SignInForm) {
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
  }),
});

export const { useSignInMutation } = authApi;
