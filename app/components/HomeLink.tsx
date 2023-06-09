import React from "react";
import Icons from "@/app/components/Icons";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/navigation";

const HomeLink = () => {
  const router = useRouter();

  return (
    <button
      className="sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-900 border focus:ring-gray-700"
      onClick={() => router.push("/")}
    >
      <Icons icon={HiHome} />
      <aside className="text-left">
        <p className="mt-1 font-sans text-sm font-semibold">Click to go Home</p>
        <p className="mb-1 text-xs">Thanks for playing!</p>
      </aside>
    </button>
  );
};

export default HomeLink;
