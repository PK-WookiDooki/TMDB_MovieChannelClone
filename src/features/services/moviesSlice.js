import { createSlice } from "@reduxjs/toolkit";
import cookie from "cookiejs";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    keyword: "",
  },
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },

    setKeyword: (state, { payload }) => {
      state.keyword = payload;
      cookie.set("keyword", state.keyword);
    },
  },
});

export const { addMovies, setKeyword } = moviesSlice.actions;
export default moviesSlice.reducer;
