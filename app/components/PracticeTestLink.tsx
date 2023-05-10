import React from "react";
import Icons from "@/app/components/Icons";
import { TfiGame } from "react-icons/tfi";
import { useQuestionStore } from "@/app/Store";
import Link from "next/link";

const PracticeTestLink = () => {
  const handleReset = useQuestionStore((state) => state.reset);

  return (
    <Link
      href="/practice"
      onClick={handleReset}
      className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
    >
      <Icons icon={TfiGame} />
      <aside className="text-left">
        <p className="mb-1 text-xs">Play again?</p>
        <p className="-mt-1 font-sans text-sm font-semibold">
          Reset Practice Test
        </p>
      </aside>
    </Link>
  );
};

export default PracticeTestLink;
