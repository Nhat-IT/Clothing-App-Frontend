import { configureStore } from "@reduxjs/toolkit";
import CartItem from "../components/cartItem";

export const store = configureStore({
  reducer: {
    cartItems: CartItemReducer,
  },
});
