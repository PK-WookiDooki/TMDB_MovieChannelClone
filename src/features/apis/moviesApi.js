import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDY2YjExYWQ1MGZmYjM0N2I1MWRmYjkwZTM3ZTNkZCIsInN1YiI6IjY0MWZjYmZjNmEzNDQ4MDA3YmI1NTZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kfclglIVLvzCYr2LsD2gEwJK1v37fiCzpewCgi6SnE";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/movie/" }),
  tagTypes: ["moviesApi"],
  endpoints: (builder) => ({
    getMovieByID: builder.query({
      query: (id) => ({
        url: `${id}?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),

    getMovieKeys: builder.query({
      query: (id) => ({
        url: `${id}/videos?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),

    getMovieCreditsByID: builder.query({
      query: (id) => ({
        url: `${id}/credits?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),
  }),
});

export const {
  useGetMovieByIDQuery,
  useGetMovieKeysQuery,
  useGetMovieCreditsByIDQuery,
} = moviesApi;
export default moviesApi.reducer;
