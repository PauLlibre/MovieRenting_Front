import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || {
  user: "",
  user_id: "",
  user_role: "",
};

const logoutState = {
  user: "",
  user_id: "",
  user_role: "",
};

export const logUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, action) => {
      state.user = action.payload.name;
      state.user_id = action.payload.id;
      state.user_role = action.payload.role;
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          user_id: action.payload.id,
          role: action.payload.role,
        })
      );
    },
    logoutUser: (state) => {
      localStorage.removeItem("user");
      state = { ...logoutState };
    },
    checkUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user")) || {
        user: "",
        user_id: "",
        user_role: "",
      };

      state.user = user.name;
      state.user_id = user.id;
      state.user_role = user.role;
    },
  },
});

export const { logUser, logoutUser, checkUser } = logUserSlice.actions;

export default logUserSlice.reducer;
