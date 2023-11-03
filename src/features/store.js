import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./services/moviesSlice";
import { tvApi } from "./apis/tvApi";
import {baseApi} from "./apis/baseApi.js";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    [tvApi.reducerPath]: tvApi.reducer,
    [baseApi.reducerPath] : baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( tvApi.middleware, baseApi.middleware),
});
