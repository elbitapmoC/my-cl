import React from "react";
import Icons from "@/app/components/Icons";
import { TfiGame } from "react-icons/tfi";
import { useQuestionStore } from "@/app/Store";
import Link from "next/link";

const PracticeTestLink = () => {
  const { reset } = useQuestionStore((state) => state);

  return (
    <Link
      href="/practice"
      onClick={reset}
      className="w-full sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700"
    >
      <Icons icon={TfiGame} />
      <aside className="text-left">
        <p className="mb-1 text-xs">Before the big event..</p>
        <p className="-mt-1 font-sans text-sm font-semibold">
          Do A Practice Test
        </p>
      </aside>
    </Link>
  );
};

export default PracticeTestLink;
