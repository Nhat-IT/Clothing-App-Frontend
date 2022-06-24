import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./shopping-cart/cartItemSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartItemReducer,
  },
});
