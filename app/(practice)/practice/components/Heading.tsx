import React from "react";
import { useQuestionStore } from "@/app/Store";

const QuestionHeading = () => {
  const { current, total, questions } = useQuestionStore((state) => state);
  return (
    <aside className="flex flex-col items-start w-full">
      <label htmlFor="file" className="mb-3 text-base sm:text-lg text-gray-400">
        Question {current + 1} of {total}
      </label>

      <progress
        id="file"
        value={current + 0.1}
        max={total}
        className="bg-white w-full h-2 rounded-full"
      />
      <p className="mt-12 text-2xl text-white font-bold mb-2">
        {questions[current].question}
      </p>
    </aside>
  );
};

export default QuestionHeading;
