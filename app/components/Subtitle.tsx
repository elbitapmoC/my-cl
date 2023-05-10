import React from "react";

const Subtitle = ({ text }: { text: string }) => {
  return (
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      {text}
    </p>
  );
};

export default Subtitle;
