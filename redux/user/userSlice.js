import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {},
  token: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser:(state, {payload})=>{
      state.token = payload
      try{

      }
      catch{

      }
    },
    deleteUser:(state, {payload})=>{
        state.token = ""
    }
  },
});


export const {addUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;  