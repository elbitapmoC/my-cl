import React from "react";

const Title = ({ title }: { title: String }) => {
  return (
    <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
      {title}
    </h1>
  );
};

export default Title;
