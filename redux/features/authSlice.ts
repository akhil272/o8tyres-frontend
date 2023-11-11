import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

export interface IAuthState {
  accessToken: string;
  refreshToken: string;
  user: User | undefined;
}

const initialState: IAuthState = {
  accessToken: "",
  refreshToken: "",
  user: undefined,
};

export interface AuthPayload {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAndToken: (state, action: PayloadAction<AuthPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    signOutUser: (state) => {
      Object.assign(state, initialState);
    }, // use persistor.purge(); for clearing redux local storage.
  },
});

// Action creators are generated for each case reducer function
export const { setUserAndToken, signOutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
