import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    checkLogin: (state) => {
      state.isLoggedIn = localStorage.getItem("auth-token");
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { checkLogin, logout } = loginSlice.actions;

export default loginSlice.reducer;
