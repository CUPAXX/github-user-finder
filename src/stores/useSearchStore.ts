/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export interface searchData {
  incomplete_results: boolean;
  items: any;
  total_count: number;
  current_page: number;
  next_page: boolean;
  prev_page: boolean;
}

type State = {
  searchData: searchData;
  searchInput: string;
  isLoading: boolean;
};

type Action = {
  updateData: (searchData: State["searchData"]) => void;
  updateSearchInput: (searchInput: State["searchInput"]) => void;
  resetSearchData: () => void;
  updateIsLoading: () => void;
};

const initialState: State = {
  searchData: {
    incomplete_results: false,
    items: [],
    total_count: 0,
    current_page: 1,
    next_page: false,
    prev_page: false,
  },
  searchInput: "",
  isLoading: false,
};

export const useSearchStore = create<State & Action>((set, get) => ({
  searchData: {
    ...initialState.searchData,
  },
  searchInput: "",
  isLoading: false,
  updateSearchInput: (searchInput) => set(() => ({ searchInput: searchInput })),
  updateData: (searchData) => set(() => ({ searchData: searchData })),
  resetSearchData: () => {
    set(() => ({
      searchData: initialState.searchData,
    }));
  },
  updateIsLoading: () => {
    set(() => ({ isLoading: !get().isLoading }));
  },
}));
