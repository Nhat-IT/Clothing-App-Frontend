import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../../components/cartItem";

const initialValue = {
  value: [],
};

export const CartItemSlice = createSlice({
  name: "cartItem",
  initialValue,
  reducers: {
    addItem:(state, payload)=>{

    }
  },
});


export const {addItem} = CartItemSlice.actions;
export default CartItemSlice.reducer;  