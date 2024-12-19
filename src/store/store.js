import { configureStore, createSlice } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/siderbarSlice";
import scrollSlice from "./slices/scrollSlice";

const hotelStore = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    scroll: scrollSlice.reducer,
  },
});

export default hotelStore;
