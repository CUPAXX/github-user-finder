/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export interface repoData {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  url: string;
}

type State = {
  listRepo: [] | [repoData];
  isLoading: boolean;
};

type Action = {
  updatelistRepo: (listRepo: State["listRepo"]) => void;
  resetlistRepo: () => void;
  updateIsLoading: (isLoading: State["isLoading"]) => void;
};

const initialState: State = {
  listRepo: [],
  isLoading: false,
};

export const useRepoStore = create<State & Action>((set) => ({
  listRepo: {
    ...initialState.listRepo,
  },
  isLoading: initialState.isLoading,
  updatelistRepo: (listRepo) => set(() => ({ listRepo: listRepo })),
  resetlistRepo: () => {
    set(() => ({
      listRepo: initialState.listRepo,
    }));
  },
  updateIsLoading: (isLoading) => {
    set(() => ({ isLoading: isLoading }));
  },
}));
