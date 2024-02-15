import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import cagtegoriesReducer from "./features/categoriesSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    categories: cagtegoriesReducer,
  },
});
