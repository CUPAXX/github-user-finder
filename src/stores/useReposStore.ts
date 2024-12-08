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
  html_url: string;
}

type State = {
  listRepo: [] | [repoData];
  detailRepo: repoData;
  isLoading: boolean;
};

type Action = {
  updatelistRepo: (listRepo: State["listRepo"]) => void;
  updateDetailRepo: (detailRepo: State["detailRepo"]) => void;
  resetlistRepo: () => void;
  updateIsLoading: (isLoading: State["isLoading"]) => void;
};

const initialState: State = {
  listRepo: [],
  detailRepo: {
    name: "",
    description: "",
    language: "",
    stargazers_count: 0,
    forks_count: 0,
    created_at: "",
    updated_at: "",
    html_url: "",
  },
  isLoading: false,
};

export const useRepoStore = create<State & Action>((set) => ({
  listRepo: {
    ...initialState.listRepo,
  },
  detailRepo: {
    ...initialState.detailRepo,
  },
  isLoading: initialState.isLoading,
  updatelistRepo: (listRepo) => set(() => ({ listRepo: listRepo })),
  updateDetailRepo: (detailRepo) => set(() => ({ detailRepo: detailRepo })),
  resetlistRepo: () => {
    set(() => ({
      listRepo: initialState.listRepo,
    }));
  },
  updateIsLoading: (isLoading) => {
    set(() => ({ isLoading: isLoading }));
  },
}));
