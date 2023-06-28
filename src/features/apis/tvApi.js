import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDY2YjExYWQ1MGZmYjM0N2I1MWRmYjkwZTM3ZTNkZCIsInN1YiI6IjY0MWZjYmZjNmEzNDQ4MDA3YmI1NTZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kfclglIVLvzCYr2LsD2gEwJK1v37fiCzpewCgi6SnE";

export const tvApi = createApi({
  reducerPath: "tvApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/tv/" }),
  tagTypes: ["tvApi"],
  endpoints: (builder) => ({
    getTVByID: builder.query({
      query: (id) => ({
        url: `${id}?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["tvApi"],
    }),

    getTVKeys: builder.query({
      query: (id) => ({
        url: `${id}/videos?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["tvApi"],
    }),

    getTVCreditsByID: builder.query({
      query: (id) => ({
        url: `${id}/credits?language=en-US`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["tvApi"],
    }),
  }),
});

export const {
  useGetTVByIDQuery,
  useGetTVKeysQuery,
  useGetTVCreditsByIDQuery,
} = tvApi;
export default tvApi.reducer;
