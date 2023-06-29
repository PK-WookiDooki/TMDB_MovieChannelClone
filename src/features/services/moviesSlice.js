import { createSlice } from "@reduxjs/toolkit";
import cookie from "cookiejs";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    filteredMovies: [],
    keyword: "",
    filteredSeries: [],
  },
  reducers: {
    addMovies: (state, { payload }) => {
      state.filteredMovies = payload;
    },

    addSeries: (state, { payload }) => {
      state.filteredSeries = payload;
    },

    setKeyword: (state, { payload }) => {
      state.keyword = payload;
      cookie.set("keyword", state.keyword);
    },
  },
});

export const { addMovies, setKeyword, addSeries } = moviesSlice.actions;
export default moviesSlice.reducer;
