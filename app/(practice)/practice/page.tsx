"use client";
import React from "react";
import Confetti from "@/app/components/Confetti";

import { useQuestionStore } from "@/app/Store";
import Nav from "@/app/(practice)/practice/components/Nav";
import Heading from "./components/Heading";
import Options from "./components/Options";
import HomeLink from "@/app/components/HomeLink";

const PracticeTestPage = () => {
  const showScore = useQuestionStore((state) => state.showScore);
  const total = useQuestionStore((state) => state.total);
  const correct = useQuestionStore((state) => state.score);

  return (
    <>
      {showScore ? (
        <>
          <Confetti />
          <h1 className="text-3xl font-semibold text-center text-white mb-8">
            You scored {correct} out of {total}
          </h1>
          <HomeLink />
        </>
      ) : (
        <article className="w-full p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700 max-w-lg">
          <Heading />
          <Options />
          <Nav />
        </article>
      )}
    </>
  );
};

export default PracticeTestPage;
