import { create } from "zustand";

type Selected = {
  option: string;
  index: number;
};
interface QuestionState {
  current: number;
  score: number;
  showScore: boolean;
  next: () => void;
  previous: () => void;
  selected: string[];
  handleSelected: ({ option, index }: Selected) => void;
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
  handleSelected: ({ option, index }) =>
    set((state) => ({
      selected: [...state.selected, option[index]],
    })),
}));
