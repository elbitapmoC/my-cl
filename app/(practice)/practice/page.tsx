"use client";
import React from "react";

import questions from "@/app/api/questions.json";
import { useQuestionStore } from "@/app/Store";
import PracticeNav from "@/app/(practice)/practice/components/Nav";
import Heading from "./components/Heading";
import Options from "./components/Options";

const PracticeTestPage = () => {
  const show = useQuestionStore((state) => state.showScore);
  const total = questions.length;
  const correct = useQuestionStore((state) => state.score);

  return (
    <>
      {show ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {correct} out of {total}
        </h1>
      ) : (
        <article className="w-full p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700 max-w-lg">
          <Heading />
          <Options />
          <PracticeNav />
        </article>
      )}
    </>
  );
};

export default PracticeTestPage;
