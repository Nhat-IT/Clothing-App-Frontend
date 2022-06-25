import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./shopping-cart/cartItemsSlice"
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    user: userReducer
  },
  devTools: true,
});