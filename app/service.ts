import api from "../utils/api";

export function getPopular(page: number, search: string, urlName: string) {
  const url = search.length > 0 ? `/search/${urlName}` : `/${urlName}/popular`;
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

export function getCredits(id: number, type: string) {
  return api
    .get(`${type}/${id}/credits`, {
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

export function getProvider(id: number, type: string) {
  type ProviderMovie = {
    BR: {
      flatrate: [];
      rent: [];
    };
  };

  return api
    .get(`${type}/${id}/watch/providers`, {
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
