import api from "../utils/api";

export function getPopular(
  page: number,
  search: string,
  urlName: string,
  sort: string,
  genderId: string | null,
  sortId: string | null
) {
  const url = search.length > 0 ? `/search/${urlName}` : `/${urlName}/${sort}`;
  console.log("genderId", genderId);
  console.log("sortId", sortId);
  return api
    .get(url, {
      params: {
        include_adult: false,
        include_video: false,
        language: "pt-BR",
        page,
        query: search,
        sort_by: sortId || "popularity.desc",
        with_genres: genderId,
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

export type Item = {
  provider_id: number;
  provider_name: string;
  logo_path: string;
};

export type ProviderRes = {
  providers: Item[];
  link: string;
};
export function getProvider(id: number, type: string) {
  type ProviderMovie = {
    BR: {
      link: string;
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
        const link = BR.link || "";

        const response: ProviderRes = {
          providers: [...flatrate, ...rent],
          link,
        };
        return response;
      }

      return [];
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}
