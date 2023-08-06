import { create } from "zustand";

interface SelectFilter {
  movieGenderId: string | null;
  movieSortId: string | null;
  seriesGenderId: string | null;
  seriesSortId: string | null;
  setMovieGenderId: (value: string) => void;
  setMovieSortId: (value: string) => void;
  setSeriesGenderId: (value: string) => void;
  setSeriesSortId: (value: string) => void;
}

const useSelectFilter = create<SelectFilter>()((set) => ({
  movieGenderId: null,
  movieSortId: null,
  seriesGenderId: null,
  seriesSortId: null,

  setMovieGenderId: (value) =>
    set(() => ({
      movieGenderId: value,
    })),
  setMovieSortId: (value) =>
    set(() => ({
      movieSortId: value,
    })),
  setSeriesGenderId: (value) =>
    set(() => ({
      seriesGenderId: value,
    })),
  setSeriesSortId: (value) =>
    set(() => ({
      seriesSortId: value,
    })),
}));

export default useSelectFilter;
