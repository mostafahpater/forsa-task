import { configureStore } from "@reduxjs/toolkit";
import StoreSlice from "./Slicer/StoreSlice";

export const store = configureStore({
  reducer: {
    store: StoreSlice,
  },
});
