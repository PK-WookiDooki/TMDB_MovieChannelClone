import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./apis/moviesApi";
import moviesSlice from "./services/moviesSlice";
import { tvApi } from "./apis/tvApi";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [tvApi.reducerPath]: tvApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, tvApi.middleware),
});
