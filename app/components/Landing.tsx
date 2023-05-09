// Forms, Buttons, inputs, etc. - These aren't compatible w/ server components.
// We want to use the above mentioned and make this form interactive.
"use client";

import Icons from "./Icons";
import { FaChartPie } from "react-icons/fa";
import { TfiGame } from "react-icons/tfi";
import Title from "@/app/components/Title";
import Subtitle from "@/app/components/Subtitle";
import Link from "next/link";

const Landing = () => {
  return (
    <article className="w-full p-4 text-center border border-gray-200 rounded-lg shadow sm:p-8 bg-gray-800 dark:border-gray-700 max-w-5xl">
      <Title title="ClinIntell | Mission Briefing" />

      <Subtitle text="Create an app that focuses on data visualization & users taking a test." />

      <aside className="mt-8 items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Link
          href="/visualize"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <Icons icon={FaChartPie} />
          <aside className="text-left">
            <p className="mb-1 text-xs">Too much text...</p>
            <p className="-mt-1 font-sans text-sm font-semibold">
              Visualize Data
            </p>
          </aside>
        </Link>

        <Link
          href="/practice_intro"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <Icons icon={TfiGame} />
          <aside className="text-left">
            <p className="mb-1 text-xs">Before the big event..</p>
            <p className="-mt-1 font-sans text-sm font-semibold">
              Do A Practice Test
            </p>
          </aside>
        </Link>
      </aside>
    </article>
  );
};

export default Landing;
