import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TyreProduct } from "../types";

interface CartItem extends TyreProduct {
  cartQuantity: number;
}
interface CartState {
  cart: CartItem[];
}
const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<TyreProduct & { cartQuantity: number }>
    ) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.cartQuantity += action.payload.cartQuantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.cartQuantity < 10) {
        item.cartQuantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.cartQuantity > 1) {
        item.cartQuantity--;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    reset: () => initialState,
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  reset,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
