import React from "react";

function TableBody({ datas, initialInvestment }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tbody>
      {datas.map((item, index) => (
        <tr key={index}>
          <td>{item.year}</td>
          <td>{formatter.format(item.savingsEndOfYear)}</td>
          <td>{formatter.format(item.yearlyInterest)}</td>
          <td>
            {formatter.format(item.savingsEndOfYear -
              initialInvestment -
              item.yearlyContribution * item.year)}
          </td>
          <td>
            {formatter.format(initialInvestment +
              item.yearlyContribution * item.year)}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
