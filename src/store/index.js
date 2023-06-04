import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./UserSlice";

//compare with combine reducers, this does it automatically.
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: UserSlice.reducer,
  },
});