import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../fratures/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
