import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: ['1', '2'],
};

export const cartItemSlice = createSlice({
  name: "cartItems",
  initialValue,
  reducers: {
    addItem:(state, payload)=>{

    }
  },
});


export const {addItem} = cartItemsSlice.actions;
export default cartItemsSlice.reducer;  