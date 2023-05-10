"use client";
import React from "react";
import { useQuestionStore } from "@/app/Store";

const Nav = () => {
  const current = useQuestionStore((state) => state.current);
  const total = useQuestionStore((state) => state.total);
  const selected = useQuestionStore((state) => state.selected);

  const handleNext = useQuestionStore((state) => state.next);
  const handlePrevious = useQuestionStore((state) => state.previous);
  const handleSubmit = useQuestionStore((state) => state.submit);

  return (
    <aside className="flex font-medium justify-between w-full mt-4 text-white">
      <button
        disabled={current === 0 && true}
        className={`w-[49%] py-3 rounded-lg mr-2 ${
          current === 0 && "cursor-not-allowed opacity-25 disabled"
        }`}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        disabled={selected[current] ? false : true}
        className={`w-[49%] py-3 bg-teal-600 rounded-lg ml-2 ${
          !selected[current] && "cursor-not-allowed opacity-25 disabled"
        }`}
        onClick={current + 1 === total ? handleSubmit : handleNext}
      >
        {current + 1 === total ? "Submit" : "Next"}
      </button>
    </aside>
  );
};

export default Nav;
