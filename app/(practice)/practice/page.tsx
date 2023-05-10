"use client";
import React, { useEffect } from "react";

import questions from "@/app/api/questions.json";
import { useQuestionStore } from "@/app/Store";

const PracticeTestPage = () => {
  const show = useQuestionStore((state) => state.showScore);
  const current = useQuestionStore((state) => state.current);
  const total = questions.length;
  const correct = useQuestionStore((state) => state.score);
  const handleNext = useQuestionStore((state) => state.next);
  const handlePrevious = useQuestionStore((state) => state.previous);

  const selectedOptions = useQuestionStore((state) => state.selected);
  const handleSelect = useQuestionStore((state) => state.handleSelected);

  console.log(`selected: ${selectedOptions}`);

  return (
    <>
      {show ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {correct} out of {total}
        </h1>
      ) : (
        <article className="w-full p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700 max-w-lg">
          <aside className="flex flex-col items-start w-full">
            <label
              htmlFor="file"
              className="mb-3 text-base text-gray-500 sm:text-lg dark:text-gray-400"
            >
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

          <article className="flex flex-col w-full">
            <ul className="w-full text-sm font-medium text-gray-900 border rounded-lg bg-gray-900 border-gray-600">
              {questions[current].options.map((option, index) => (
                <li
                  key={index}
                  className={`border-gray-200 rounded-t-lg dark:border-gray-600 ${
                    index !== total && "border-b"
                  }`}
                >
                  <aside className="flex items-center pl-3">
                    <input
                      id={option}
                      type="radio"
                      value={option}
                      name={option}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      // TODO: Fix issue... onChange is adding onto our array. We need it to replace.
                      onChange={() => handleSelect(option, index)}
                      checked={option === selectedOptions[current]}
                    />
                    <label
                      htmlFor={option}
                      className="w-full py-3 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {option}
                    </label>
                  </aside>
                </li>
              ))}
            </ul>
          </article>

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
        </article>
      )}
    </>
  );
};

export default PracticeTestPage;