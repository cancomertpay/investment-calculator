import { useState } from "react";
import CalculateForm from "./components/CalculateForm/CalculateForm";
import CalculateTable from "./components/CalculateTable/CalculateTable";
import Header from "./components/Header/Header";

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
      <Header />
      <CalculateForm calculateHandler={calculateHandler} />
      <CalculateTable
        data={yearlyData}
        initialInvestment={userInput["current-savings"]}
      />
    </div>
  );
}

export default App;
