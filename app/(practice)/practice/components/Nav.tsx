"use client";
import React from "react";
import { useQuestionStore } from "@/app/Store";

const Nav = () => {
  const { current, total, selected, next, previous, submit } = useQuestionStore(
    (state) => state
  );

  return (
    <aside className="flex font-medium justify-between w-full mt-4 text-white">
      <button
        disabled={current === 0 && true}
        className={`w-[49%] py-3 rounded-lg mr-2 ${
          current === 0 && "cursor-not-allowed opacity-25 disabled"
        }`}
        onClick={previous}
      >
        Previous
      </button>
      <button
        disabled={selected[current] ? false : true}
        className={`w-[49%] py-3 bg-teal-600 rounded-lg ml-2 ${
          !selected[current] && "cursor-not-allowed opacity-25 disabled"
        }`}
        onClick={current + 1 === total ? submit : next}
      >
        {current + 1 === total ? "Submit" : "Next"}
      </button>
    </aside>
  );
};

export default Nav;
