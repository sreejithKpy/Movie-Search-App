const API_KEY = "3c72d7bc";
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  try {
    // OMDb doesn't have "popular", so use default search
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=3c72d7bc&s=movie`
    );

    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );

    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};