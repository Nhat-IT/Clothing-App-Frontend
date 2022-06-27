import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const items = AsyncStorage.getItem("cart");

const initialState = {
  value: [],
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const duplicate = state.value.filter(
        (val) =>
          val.detail_product_id === payload.detail_product_id &&
          val.size === payload.size
      );
      console.log(duplicate.length);
      if (duplicate.length > 0) {
        console.log("dup");
        state.value = state.value.filter(
          (e) =>
            e.detail_product_id !== payload.detail_product_id &&
            e.size !== payload.size
        );
        state.value = [
          ...state.value,
          {
            nameProduct: payload.nameProduct,
            detail_product_id: duplicate[0].detail_product_id,
            size: duplicate[0].size,
            quantity: duplicate[0].quantity + 1,
            price: payload.price,
            image: payload.image,
            colorHex: payload.colorHex,
            color: payload.color,
          },
        ];
      } else {
        console.log("not dup");
        state.value = [...state.value, payload];
      }
    },
    removeItem: (state, { payload }) => {
      state.value = state.value.filter(
        (e) =>
          e.detail_product_id !== payload.detail_product_id &&
          e.size !== payload.size
      );
    },
    deleteCart: (state, { payload }) => {
      state.value = [];
    }
  },
});

export const { addItem, removeItem, deleteCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
