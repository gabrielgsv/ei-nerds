import { create } from "zustand";

interface SelectFilter {
  genderId: string | null;
  sortId: string | null;
  filteredMovie: boolean;
  setGenderId: (value: string) => void;
  setSortId: (value: string) => void;
  setFilteredMovie: (value: boolean) => void;
}

const useSelectFilter = create<SelectFilter>()((set) => ({
  genderId: null,
  sortId: null,
  filteredMovie: false,
  setGenderId: (value) =>
    set(() => ({
      genderId: value,
    })),
  setSortId: (value) =>
    set(() => ({
      sortId: value,
    })),
  setFilteredMovie: (value) =>
    set(() => ({
      filteredMovie: value,
    })),
}));

export default useSelectFilter;
