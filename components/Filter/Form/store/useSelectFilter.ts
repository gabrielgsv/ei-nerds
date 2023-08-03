import { create } from "zustand";

interface SelectFilter {
  genderId: string | null;
  setGenderId: (value: string) => void;
  sortId: string | null;
  setSortId: (value: string) => void;
}

const useSelectFilter = create<SelectFilter>()((set) => ({
  genderId: null,
  setGenderId: (value) =>
    set(() => ({
      genderId: value,
    })),
  sortId: null,
  setSortId: (value) =>
    set(() => ({
      sortId: value,
    })),
}));

export default useSelectFilter;
