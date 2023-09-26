import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Table from "../UI/Table";

function CalculateTable({ data, initialInvestment }) {
  return (
    <>
      {data.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          Not investment calculated yet.
        </div>
      ) : (
        <Table className="result">
          <TableHead />
          <TableBody datas={data} initialInvestment={initialInvestment} />
        </Table>
      )}
    </>
  );
}

export default CalculateTable;
