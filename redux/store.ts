import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import { authReducer } from "./features/authSlice";
import storage from "./customStorage";
import { authApi } from "./services/authApi";
import { cartReducer } from "./features/cartSlice";
import { productApi } from "./services/productApi";
import { api } from "./services/api";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};
const cartPersistConfig = {
  key: "cart",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [PERSIST, "persist/PURGE"] },
    }).concat([api.middleware, authApi.middleware, productApi.middleware]),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
