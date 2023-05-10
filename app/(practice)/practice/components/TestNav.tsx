"use client";
import React from "react";
import { useQuestionStore } from "@/app/Store";

const TestNav = () => {
  const current = useQuestionStore((state) => state.current);
  const total = useQuestionStore((state) => state.total);
  const handleNext = useQuestionStore((state) => state.next);
  const handlePrevious = useQuestionStore((state) => state.previous);

  return (
    <aside className="flex font-medium justify-between w-full mt-4 text-white">
      <button
        disabled={current === 0 && true}
        className={`w-[49%] py-3 rounded-lg mr-2 disabled ${
          current === 0 && "cursor-not-allowed opacity-25"
        }`}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="w-[49%] py-3 bg-teal-600 rounded-lg ml-2"
      >
        {current + 1 === total ? "Submit" : "Next"}
      </button>
    </aside>
  );
};

export default TestNav;
