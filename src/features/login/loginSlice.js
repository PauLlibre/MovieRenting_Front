import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      console.log(state.isLoggedIn);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      console.log(state.isLoggedIn);
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
