/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export interface userData {
  avatar_url: string;
  profile_url: string;
  bio: string;
  login: string;
  repos_url: string;
  name: string;
}

type State = {
  userData: userData;
  isLoading: boolean;
};

type Action = {
  updateUserData: (userData: State["userData"]) => void;
  resetuserData: () => void;
  updateIsLoading: (isLoading: State["isLoading"]) => void;
};

const initialState: State = {
  userData: {
    avatar_url: "",
    profile_url: "",
    bio: "",
    login: "",
    repos_url: "",
    name: "",
  },
  isLoading: false,
};

export const useUserStore = create<State & Action>((set) => ({
  userData: {
    ...initialState.userData,
  },
  isLoading: initialState.isLoading,
  updateUserData: (userData) => set(() => ({ userData: userData })),
  resetuserData: () => {
    set(() => ({
      userData: initialState.userData,
    }));
  },
  updateIsLoading: (isLoading) => {
    set(() => ({ isLoading: isLoading }));
  },
}));
