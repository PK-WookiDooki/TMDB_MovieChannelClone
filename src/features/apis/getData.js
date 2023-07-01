import axios from "axios";
const API_KEY = "api_key=4066b11ad50ffb347b51dfb90e37e3dd";

export const getAllData = async (type, pages) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/popular?language=en-US&${API_KEY}&page=${pages}`
  );

  const { results } = res.data;
  return results;
};

export const getTrailerKeys = async (type, id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US&${API_KEY}`
  );

  const { results } = res.data;
  return results.length > 0;
};
