import { create } from "zustand";

import { SelectType } from "./useSelectContent";

interface SerieList {
  series: SelectType[];
  page: number;
  totalPage: number;
  search: string;
  setSeries: (value: SelectType[], previus?: boolean) => void;
  setPage: (value: number) => void;
  setTotalPage: (value: number) => void;
  setSearch: (value: string) => void;
}

const useSerieList = create<SerieList>()((set) => ({
  series: [],
  page: 0,
  totalPage: 1,
  search: "",
  setSeries: (value, previus) =>
    set((state) => ({
      series: previus ? [...state.series, ...value] : value,
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

export default useSerieList;
