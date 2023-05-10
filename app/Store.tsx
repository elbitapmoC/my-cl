import { create } from "zustand";

interface QuestionState {
  currentQuestion: number;
  userAnswers: string[];
  score: number;
  showScore: boolean;
  next: () => void;
  previous: () => void;
}

export const useQuestionStore = create<QuestionState>()((set) => ({
  currentQuestion: 0,
  userAnswers: [],
  score: 0,
  showScore: false,
  previous: () =>
    set((state) => ({ currentQuestion: state.currentQuestion - 1 })),
  next: () =>
    set((state) => ({
      currentQuestion: state.currentQuestion + 1,
    })),
}));
