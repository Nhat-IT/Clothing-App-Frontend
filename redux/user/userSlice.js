import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
      try {
        
      } catch {}
    },
    addToken: (state, { payload }) => {
      state.token = payload;
      try {
      } catch {}
    },
    deleteToken: (state, { payload }) => {
      state.token = "";
    },
    deleteUser: (state, { payload }) => {
      state.user = {};
    },
  },
});

export const { addUser, addToken, deleteUser, deleteToken } = userSlice.actions;
export default userSlice.reducer;
