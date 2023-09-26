import React, { useState } from "react";

function CalculateForm({ calculateHandler }) {
  const [userInputs, setUserInputs] = useState({
    "current-savings": "10000",
    "yearly-contribution": "1200",
    "expected-return": "7",
    duration: "10",
  });

  const handleChanges = (e) => {
    switch (e.target.id) {
      case "current-savings":
        setUserInputs((prev) => {
          return { ...prev, "current-savings": e.target.value };
        });
        break;
      case "yearly-contribution":
        setUserInputs((prev) => {
          return { ...prev, "yearly-contribution": e.target.value };
        });
        break;
      case "expected-return":
        setUserInputs((prev) => {
          return { ...prev, "expected-return": e.target.value };
        });
        break;
      case "duration":
        setUserInputs((prev) => {
          return { ...prev, duration: e.target.value };
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      "current-savings": +userInputs["current-savings"],
      "yearly-contribution": +userInputs["yearly-contribution"],
      "expected-return": +userInputs["expected-return"],
      duration: +userInputs["duration"],
    };
    calculateHandler(data);
  };

  const resetInputsValues = () => {
    setUserInputs({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInputs["current-savings"]}
            onChange={handleChanges}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={userInputs["yearly-contribution"]}
            id="yearly-contribution"
            onChange={handleChanges}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            value={userInputs["expected-return"]}
            id="expected-return"
            onChange={handleChanges}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInputs["duration"]}
            onChange={handleChanges}
          />
        </p>
        {/* <p>
        <label>Currency</label>
        <select
          
          onChange={handleChange}
        >
          {newYears().map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        </p> */}
      </div>
      <p className="actions">
        <button className="buttonAlt" onClick={resetInputsValues}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculateForm;
