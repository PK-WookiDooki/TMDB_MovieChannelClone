import { baseApi } from "./baseApi.js";

const API_KEY = "api_key=4066b11ad50ffb347b51dfb90e37e3dd";
const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDY2YjExYWQ1MGZmYjM0N2I1MWRmYjkwZTM3ZTNkZCIsInN1YiI6IjY0MWZjYmZjNmEzNDQ4MDA3YmI1NTZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kfclglIVLvzCYr2LsD2gEwJK1v37fiCzpewCgi6SnE";

export const tvApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPopularSeries: builder.query({
            query: ({ page, sGenreId }) => ({
                url:
                    `discover/tv?language=en-US&${API_KEY}&page=${page}&sort_by=popularity.desc` +
                    (sGenreId !== "all" ? `&with_genres=${sGenreId}` : ""),
                method: "GET",
            }),
            providesTags: ["movies"],
            invalidatesTags: ["movies"],
        }),

        getTVByID: builder.query({
            query: (id) => ({
                url: `tv/${id}?language=en-US`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["series"],
        }),

        getTVKeys: builder.query({
            query: (id) => ({
                url: `tv/${id}/videos?language=en-US&append_to_response=videos`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["series"],
        }),

        getTVCreditsByID: builder.query({
            query: (id) => ({
                url: `tv/${id}/credits?language=en-US`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["series"],
        }),

        getTVGenres: builder.query({
            query: () => ({
                url: `genre/tv/list?language=en`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["series"],
        }),

        getTVRecommendations: builder.query({
            query: (id) => ({
                url: `tv/${id}/recommendations?language=en-US&page=1`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["series"],
        }),
    }),
});

export const {
    useGetAllPopularSeriesQuery,
    useGetTVByIDQuery,
    useGetTVKeysQuery,
    useGetTVCreditsByIDQuery,
    useGetTVGenresQuery,
    useGetTVRecommendationsQuery,
} = tvApi;
