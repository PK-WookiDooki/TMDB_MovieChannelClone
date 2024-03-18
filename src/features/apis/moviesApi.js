import { baseApi } from "./baseApi.js";

const API_KEY = "api_key=4066b11ad50ffb347b51dfb90e37e3dd";
const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDY2YjExYWQ1MGZmYjM0N2I1MWRmYjkwZTM3ZTNkZCIsInN1YiI6IjY0MWZjYmZjNmEzNDQ4MDA3YmI1NTZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kfclglIVLvzCYr2LsD2gEwJK1v37fiCzpewCgi6SnE";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPopularMovies: builder.query({
            query: ({ page, mGenreId }) => ({
                url:
                    `discover/movie?language=en-US&${API_KEY}&page=${page}&sort_by=popularity.desc` +
                    (mGenreId !== "all" ? `&with_genres=${mGenreId}` : ""),
                method: "GET",
            }),
            providesTags: ["movies"],
            invalidatesTags: ["movies"],
        }),

        getSearchedResults: builder.query({
            query: ({ keyword, page }) => ({
                url: `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=${page}`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["movies", "series"],
        }),

        getMovieByID: builder.query({
            query: (id) => ({
                url: `movie/${id}?language=en-US`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["movies"],
        }),

        getMovieKeys: builder.query({
            query: (id) => ({
                url: `movie/${id}/videos?language=en-US&append_to_response=videos`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["movies"],
        }),

        getMovieCreditsByID: builder.query({
            query: (id) => ({
                url: `movie/${id}/credits?language=en-US`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["movies"],
        }),

        getMovieGenres: builder.query({
            query: () => ({
                url: `genre/movie/list?language=en`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["movies"],
        }),

        getRecommendations: builder.query({
            query: (id) => ({
                url: `movie/${id}/recommendations?language=en-US&page=1`,
                method: "GET",
                headers: { authorization: `Bearer ${token}` },
            }),
            providesTags: ["movies"],
        }),
    }),
});

export const {
    useGetAllPopularMoviesQuery,
    useGetSearchedResultsQuery,
    useGetMovieByIDQuery,
    useGetMovieKeysQuery,
    useGetMovieCreditsByIDQuery,
    useGetMovieGenresQuery,
    useGetRecommendationsQuery,
} = moviesApi;
