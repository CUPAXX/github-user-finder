/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type State = {
  readmeData: string;
  isLoading: boolean;
};

type Action = {
  updateReadmeData: (readmeData: State["readmeData"]) => void;
  resetReadmeData: () => void;
  updateIsLoading: (isLoading: State["isLoading"]) => void;
};

const initialState: State = {
  readmeData: "",
  isLoading: false,
};

export const useReadmeStore = create<State & Action>((set) => ({
  readmeData: initialState.readmeData,
  isLoading: initialState.isLoading,
  updateReadmeData: (readmeData) => set(() => ({ readmeData: readmeData })),
  resetReadmeData: () => {
    set(() => ({
      readmeData: initialState.readmeData,
    }));
  },
  updateIsLoading: (isLoading) => {
    set(() => ({ isLoading: isLoading }));
  },
}));
