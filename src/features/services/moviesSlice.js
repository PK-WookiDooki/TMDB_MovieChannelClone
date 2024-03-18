import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        mGenreId: "all",
        sGenreId: "all",
    },
    reducers: {
        setMGenreId: (state, { payload }) => {
            state.mGenreId = payload;
        },

        setSGenreId: (state, { payload }) => {
            state.sGenreId = payload;
        },
    },
});

export const { setMGenreId, setSGenreId } = moviesSlice.actions;
export default moviesSlice.reducer;
