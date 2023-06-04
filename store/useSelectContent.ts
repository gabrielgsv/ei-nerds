import { create } from "zustand";

export type SelectType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

interface SelectContent {
  select: SelectType;
  setSelect: (select) => void;
}

const useSelectContent = create<SelectContent>()((set) => ({
  select: {
    adult: false,
    backdrop_path: "",
    genre_ids: [0],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  setSelect: (select) =>
    set(() => ({
      select,
    })),
}));

export default useSelectContent;
