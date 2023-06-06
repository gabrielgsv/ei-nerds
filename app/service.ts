import api from "../utils/api";

export function getPopularMovies(page: number, search: string) {
  const url = search.length > 0 ? "/search/movie" : "/movie/popular";
  return api
    .get(url, {
      params: {
        include_adult: false,
        language: "pt-BR",
        page,
        query: search,
        sort_by: "popularity.desc",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getCreditsMovie(movieId: number) {
  return api
    .get(`movie/${movieId}/credits`, {
      params: {
        language: "pt-BR",
      },
    })
    .then((response) => {
      return response.data.cast;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getProviderMovie(movieId: number) {
  type ProviderMovie = {
    BR: {
      flatrate: [];
      rent: [];
    };
  };

  return api
    .get(`movie/${movieId}/watch/providers`, {
      params: {
        language: "pt-BR",
      },
    })
    .then((response) => {
      const providerMovie: ProviderMovie = response.data.results;
      const { BR } = providerMovie;

      if (BR) {
        const flatrate = BR.flatrate || [];
        const rent = BR.rent || [];

        return [...flatrate, ...rent];
      }

      return [];
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}
