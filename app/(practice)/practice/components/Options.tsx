"use client";
import React from "react";
import { useQuestionStore } from "@/app/Store";

const Options = () => {
  const { current, total, questions, selected, handleSelected } =
    useQuestionStore((state) => state);

  return (
    <article className="flex flex-col w-full">
      <ul className="w-full text-sm font-medium text-gray-900 border rounded-lg bg-gray-900 border-gray-600">
        {questions[current].options.map((option, index) => (
          <li
            key={index}
            className={`rounded-t-lg border-gray-600 ${
              index !== total && "border-b"
            }`}
          >
            <aside className="flex items-center pl-3">
              <input
                id={option}
                type="radio"
                value={option}
                name={option}
                className="w-4 h-4  focus:ring-gray-900 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                onChange={() => handleSelected((selected[current] = option))}
                checked={option === selected[current]}
              />
              <label
                htmlFor={option}
                className="w-full py-3 ml-3 text-sm font-medium text-gray-300"
              >
                {option}
              </label>
            </aside>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Options;
