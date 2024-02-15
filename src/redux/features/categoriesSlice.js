import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    populateCategories: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { populateCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
