"use client";
import conditions from "@/app/api/conditionData.json";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";

const ConditionDataTable = () => {
  const keys = Object.keys(Object.assign({}, ...conditions));

  const CellClassComp = (p) => {
    if (p.colDef.field === "CHANGE") {
      const changeValue = parseInt(p.data["CHANGE"]);
      const changeErrValue = parseInt(p.data["CHANGE_ERROR"]);
      const absoluteValue = Math.abs(changeValue);

      if (changeValue > 0 && changeValue > changeErrValue) {
        return "bg-green-300";
      } else if (changeValue < 0 && absoluteValue > changeErrValue) {
        return "bg-red-300";
      }
    }
    return null;
  };

  const colDef = keys.map((key) => {
    return {
      field: key,
      cellClass: CellClassComp,
      sortable: true,
      filter: true,
    };
  });

  const [rowData] = useState(conditions);
  const [columnDefs] = useState(colDef);

  return (
    <div className="ag-theme-alpine" style={{ height: 171 }}>
      <p className="mb-4 text-white">Condition Data Table</p>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default ConditionDataTable;
