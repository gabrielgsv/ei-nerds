import { create } from "zustand";

import { SelectType } from "./useSelectContent";

interface MovieList {
  movies: SelectType[];
  page: number;
  totalPage: number;
  search: string;
  setMovies: (value: SelectType[], previus?: boolean) => void;
  setPage: (value: number) => void;
  setTotalPage: (value: number) => void;
  setSearch: (value: string) => void;
}

const useMovieList = create<MovieList>()((set) => ({
  movies: [],
  page: 0,
  totalPage: 1,
  search: "",
  setMovies: (value, previus) =>
    set((state) => ({
      movies: previus ? [...state.movies, ...value] : value,
    })),
  setPage: (value) =>
    set(() => ({
      page: value,
    })),
  setTotalPage: (value) =>
    set(() => ({
      totalPage: value,
    })),
  setSearch: (value) =>
    set(() => ({
      search: value,
    })),
}));

export default useMovieList;
