"use client";

import Title from "@/app/components/Title";
import Subtitle from "@/app/components/Subtitle";
import PracticeTestLink from "./PracticeTestLink";
import VisualizeLink from "./VisualizeLink";

const Landing = () => {
  return (
    <article className="w-full p-4 text-center border border-gray-200 rounded-lg shadow sm:p-8 bg-gray-800 dark:border-gray-700 max-w-5xl">
      <Title title="ClinIntell | Mission Briefing" />
      <Subtitle text="Create an app that focuses on data visualization & users taking a test." />
      <aside className="mt-8 items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <VisualizeLink />
        <PracticeTestLink />
      </aside>
    </article>
  );
};

export default Landing;
