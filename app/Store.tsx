import { create } from "zustand";
import questions from "@/app/api/questions.json";

type Questions = {
  question: string;
  options: string[];
  answer: string;
};

interface QuestionState {
  questions: Questions[];
  total: number;
  current: number;
  score: number;
  showScore: boolean;
  next: () => void;
  previous: () => void;
  submit: () => void;
  selected: {};
  handleSelected: (option) => void;
  reset: () => void;
}

export const useQuestionStore = create<QuestionState>()((set) => ({
  questions,
  total: questions.length,
  current: 0,
  score: 0,
  showScore: false,
  previous: () => set((state) => ({ current: state.current - 1 })),
  next: () => set((state) => ({ current: state.current + 1 })),
  submit: () =>
    set((state) => ({
      score: calcScore(state.questions, state.selected),
      showScore: true,
    })),
  selected: {},
  handleSelected: () => set((state) => ({ selected: { ...state.selected } })),
  reset: () =>
    set(() => ({
      current: 0,
      score: 0,
      showScore: false,
      selected: {},
    })),
}));

const calcScore = (questions: Questions[], selected: {}) => {
  let newScore = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].answer === selected[i]) {
      newScore++;
    }
  }
  return newScore;
};
