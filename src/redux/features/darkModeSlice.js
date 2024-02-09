import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const counterSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    darkModeOn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    darkModeOff: (state) => {
      state.value = false;
    },
    toggleDarkMode: (state, action) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { darkModeOn, darkModeOff, toggleDarkMode } = counterSlice.actions;

export default counterSlice.reducer;
