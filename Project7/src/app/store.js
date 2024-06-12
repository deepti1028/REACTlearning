import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/tosoSlice";
export const store = configureStore({
  reducer: todoReducer,
});
