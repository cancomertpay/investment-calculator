import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import CalculateForm from "./components/CalculateForm/CalculateForm";
import CalculateTable from "./components/CalculateTable/CalculateTable";

function App() {
  const [userInput, setUserInput] = useState([]);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput.length !== 0) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <CalculateForm calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <CalculateTable
        data={yearlyData}
        initialInvestment={userInput["current-savings"]}
      />
    </div>
  );
}

export default App;
