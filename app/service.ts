import api from "../utils/api";

export function getPopularMovies() {
  return api
    .get("movie/popular", {
      params: {
        include_adult: false,
        language: "pt-BR",
        page: 1,
        sort_by: "popularity.desc",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
