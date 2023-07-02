import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDY2YjExYWQ1MGZmYjM0N2I1MWRmYjkwZTM3ZTNkZCIsInN1YiI6IjY0MWZjYmZjNmEzNDQ4MDA3YmI1NTZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kfclglIVLvzCYr2LsD2gEwJK1v37fiCzpewCgi6SnE";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  tagTypes: ["moviesApi"],
  endpoints: (builder) => ({
    getMovieByID: builder.query({
      query: (id) => ({
        url: `movie/${id}?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),

    getMovieKeys: builder.query({
      query: (id) => ({
        url: `movie/${id}/videos?language=en-US&append_to_response=videos`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),

    getMovieCreditsByID: builder.query({
      query: (id) => ({
        url: `movie/${id}/credits?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),

    getMovieGenres: builder.query({
      query: () => ({
        url: `genre/movie/list?language=en`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),

    getRecommendations: builder.query({
      query: (id) => ({
        url: `movie/${id}/recommendations?language=en-US&page=1`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["moviesApi"],
    }),
  }),
});

export const {
  useGetMovieByIDQuery,
  useLazyGetMovieByIDQuery,
  useGetMovieKeysQuery,
  useGetMovieCreditsByIDQuery,
  useGetMovieGenresQuery,
  useGetRecommendationsQuery,
} = moviesApi;
export default moviesApi.reducer;
