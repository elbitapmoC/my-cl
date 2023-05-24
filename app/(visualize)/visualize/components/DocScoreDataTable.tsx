"use client";
import docScores from "@/app/api/docScoreData.json";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";

const DocScoreDataTable = () => {
  const rowDef = [];

  let colDef = Object.keys(docScores).map((key) => {
    return {
      field: key,
    };
  });

  const months = JSON.parse(docScores.month);
  const score = JSON.parse(docScores.score);

  months.forEach((month: number, i: number) => {
    rowDef.push({ month: months[i], score: score[i] });
  });

  const [columnDefs] = useState(colDef);
  const [rowData] = useState(rowDef);

  return (
    <aside className="ag-theme-alpine mb-8" style={{ height: 300 }}>
      <p className="mb-4 mt-16 text-white">Doc Score Data Table</p>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </aside>
  );
};

export default DocScoreDataTable;
