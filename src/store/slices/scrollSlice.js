import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    isScrolling: false,
    isDarkMode: false,
  },
  reducers: {
    setScrolling: (state, action) => {
      state.isScrolling = action.payload;
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const scrollActions = scrollSlice.actions;
export default scrollSlice;
