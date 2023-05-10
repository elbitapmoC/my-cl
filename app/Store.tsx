import { create } from "zustand";

interface QuestionState {
  current: number;
  score: number;
  showScore: boolean;
  next: () => void;
  previous: () => void;
  selected: string[];
  handleSelected: (option) => void;
}

export const useQuestionStore = create<QuestionState>()((set) => ({
  current: 0,
  score: 0,
  showScore: false,
  previous: () => set((state) => ({ current: state.current - 1 })),
  next: () =>
    set((state) => ({
      current: state.current + 1,
    })),
  selected: [],
  handleSelected: (option) =>
    set((state) => ({
      selected: { ...state.selected },
    })),
}));
