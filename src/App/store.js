import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/login/loginSlice";
import userDataReducer from "../features/userData/userDataSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    userData: userDataReducer,
  },
});
