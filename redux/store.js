import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./shopping-cart/cartItemsSlice"

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
  },
  devTools: true,
});