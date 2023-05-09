"use client";
import React, { useState } from "react";
import questions from "@/app/api/questions.json";

const PracticeTestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleAnswerOption = (answer: any) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].options.map(
        (answer) => answer && answer === selectedOptions[i] && (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <>
      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {questions.length}
        </h1>
      ) : (
        <article className="w-full p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700 max-w-xl">
          <div className="flex flex-col items-start w-full">
            <label htmlFor="file" className="mb-2 uppercase text-white/60">
              Question {currentQuestion + 1} of {questions.length}
            </label>
            <progress
              id="file"
              value={currentQuestion + 1}
              max={questions.length}
              className="bg-indigo-600 w-full h-2 rounded-full"
            />
            <div className="mt-12 text-2xl text-white font-bold mb-2">
              What type of framework is Next.js?
            </div>
          </div>

          <div className="flex flex-col w-full">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
              >
                <input
                  type="radio"
                  name={option}
                  value={option}
                  onChange={(e) => handleAnswerOption(option)}
                  checked={
                    option === selectedOptions[currentQuestion]?.answerByUser
                  }
                  className="w-6 h-6 bg-black"
                />
                <p className="ml-6 text-white">{option}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between w-full mt-4 text-white">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </article>
      )}
    </>
  );
};

export default PracticeTestPage;
