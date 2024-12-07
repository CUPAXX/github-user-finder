/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export interface userData {
  avatar_url: string;
  profile_url: string;
  bio: string;
  login: string;
  repos_url: string;
}

type State = {
  userData: userData;
  isLoading: boolean;
};

type Action = {
  updateUserData: (userData: State["userData"]) => void;
  resetuserData: () => void;
  updateIsLoading: () => void;
};

const initialState: State = {
  userData: {
    avatar_url: "",
    profile_url: "",
    bio: "",
    login: "",
    repos_url: "",
  },
  isLoading: false,
};

export const useUserStore = create<State & Action>((set, get) => ({
  userData: {
    ...initialState.userData,
  },
  searchInput: "",
  isLoading: false,
  updateUserData: (userData) => set(() => ({ userData: userData })),
  resetuserData: () => {
    set(() => ({
      userData: initialState.userData,
    }));
  },
  updateIsLoading: () => {
    set(() => ({ isLoading: !get().isLoading }));
  },
}));
