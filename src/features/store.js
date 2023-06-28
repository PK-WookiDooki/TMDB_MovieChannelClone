import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./apis/moviesApi";
import moviesSlice from "./services/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
