import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  user_id: "",
  user_role: "",
};

export const logUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, action) => {
      state = { ...state, ...action.payload };
      console.log(state);
    },
    logoutUser: (state) => {
      state = { ...!state };
    },
  },
});

export const { logUser, logoutUser } = logUserSlice.actions;

export default logUserSlice.reducer;
