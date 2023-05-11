"use client";
import docScores from "@/app/api/docScoreData.json";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";

const DocScoreDataTable = () => {
  const data = [];
  let colDef = Object.keys(docScores).map((key) => {
    return {
      field: key,
    };
  });

  const extractData = (str) => {
    const removeBrackets = str.replace(/[\[\]']+/g, "");
    return removeBrackets.split(", ");
  };

  const months = extractData(docScores.month);
  const score = extractData(docScores.score);

  months.forEach((month, i) => {
    data.push({ month: months[i], score: score[i] });
  });

  const [columnDefs] = useState(colDef);
  const [rowData] = useState(data);

  return (
    <div className="ag-theme-alpine mb-8" style={{ height: 171 }}>
      <p className="mb-4 mt-16 text-white">Doc Score Data Table</p>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default DocScoreDataTable;
