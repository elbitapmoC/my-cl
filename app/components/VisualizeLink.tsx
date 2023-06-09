import Link from "next/link";
import React from "react";
import { FaChartPie } from "react-icons/fa";
import Icons from "./Icons";

const VisualizeLink = () => {
  return (
    <Link
      href="/visualize"
      className="w-full sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700"
    >
      <Icons icon={FaChartPie} />
      <aside className="text-left">
        <p className="mb-1 text-xs">Too much text...</p>
        <p className="-mt-1 font-sans text-sm font-semibold">Visualize Data</p>
      </aside>
    </Link>
  );
};

export default VisualizeLink;
