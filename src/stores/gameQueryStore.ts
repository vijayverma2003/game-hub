import { create } from "zustand";

interface GameQueryStore {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;

  setGenre: (genreId?: number) => void;
  setPlatform: (platformId?: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  setGenre: (id) => set(() => ({ genreId: id })),
  setPlatform: (id) => set(() => ({ platformId: id })),
  setSortOrder: (order) => set(() => ({ sortOrder: order })),
  setSearchText: (text) =>
    set(() => ({
      searchText: text,
      genreId: undefined,
      platformId: undefined,
      sortOrder: "",
    })),
}));

export default useGameQuery;
