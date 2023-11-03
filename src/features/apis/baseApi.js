import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath : "baseApi",
    baseQuery : fetchBaseQuery({baseUrl : "https://api.themoviedb.org/3/"}),
    tagTypes: ["movies", "series"],
    endpoints: () => ({}),
})