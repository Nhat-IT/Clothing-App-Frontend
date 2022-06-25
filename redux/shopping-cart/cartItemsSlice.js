import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const items = AsyncStorage.getItem("cart")

const initialState = {
  value: [{"name": "Áo Thun Cotton", "price": "390000", "size": "M"}],
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem:(state, {payload})=>{
      const items = AsyncStorage.getItem('cart');
      console.log(items)
    }
  },
});


export const {addItem} = cartItemsSlice.actions;
export default cartItemsSlice.reducer;  