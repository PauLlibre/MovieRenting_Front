import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import userDataReducer from "../features/userData/userDataSlice";

export const store = configureStore({
  reducer: loginReducer,
});
