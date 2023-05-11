import React from "react";
import ConditionDataTable from "./components/ConditionDataTable";
import DocScoreDataTable from "./components/DocScoreDataTable";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const VisualizePage = () => {
  return (
    <article className="w-full h-4/6 p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700 max-w-5xl">
      <ConditionDataTable />
      <DocScoreDataTable />
    </article>
  );
};

export default VisualizePage;
