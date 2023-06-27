import axios from "axios";
const API_KEY = "api_key=4066b11ad50ffb347b51dfb90e37e3dd";

export const getAllData = async (pages) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&${API_KEY}&page=${pages}`
  );

  const { results } = res.data;
  return results;
};

// export const getMovieDetail = async (movieId) => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&${API_KEY}`
//   );

//   const data = res.data;
//   return data;
// };

// // https://api.themoviedb.org/3/movie/385687/videos?language=en-US

// export const getYoutubeKeys = async (movieId) => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&${API_KEY}`
//   );

//   const { results } = res.data;
//   return results;
// };

// export const getCredits = async (movieId) => {
//   const res = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&${API_KEY}`
//   );

//   const data = res.data;
//   return data;
// };
