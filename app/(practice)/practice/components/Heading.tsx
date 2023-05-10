import React from "react";
import { useQuestionStore } from "@/app/Store";

const QuestionHeading = () => {
  const current = useQuestionStore((state) => state.current);
  const total = useQuestionStore((state) => state.total);
  const questions = useQuestionStore((state) => state.questions);

  return (
    <aside className="flex flex-col items-start w-full">
      <label htmlFor="file" className="mb-3 text-base sm:text-lg text-gray-400">
        Question {current + 1} of {total}
      </label>

      <progress
        id="file"
        value={current + 1}
        max={total}
        className="bg-teal-600 w-full h-2 rounded-full"
      />
      <p className="mt-12 text-2xl text-white font-bold mb-2">
        {questions[current].question}
      </p>
    </aside>
  );
};

export default QuestionHeading;
