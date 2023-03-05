import React, { useState } from "react";
import "./dropdown.scss";
import { states } from "./States";

const Dropdown = () => {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
  const [selectedStates, setSelectedStates] = useState(
    states.reduce((obj, state) => ({ ...obj, [state.abbreviation]: false }), {})
  );

  const numberOfStatesSelected =
    Object.values(selectedStates).filter(Boolean).length;

  console.log(selectedStates);
  return (
    <div className="container-dropdown">
      <h2 className="header">Dropdown</h2>
      <button onClick={() => setIsDropdownDisplayed(!isDropdownDisplayed)}>
        {numberOfStatesSelected
          ? `${numberOfStatesSelected} selected`
          : "Select your state"}
      </button>
      {isDropdownDisplayed && (
        <div className="dropdown">
          {states.map((state, index) => (
            <div
              className={`element ${
                selectedStates[state.abbreviation] ? " selected" : ""
              }`}
              key={index}
            >
              <input
                onChange={(e) =>
                  setSelectedStates({
                    ...selectedStates,
                    [state.abbreviation]: e.target.checked,
                  })
                }
                type="checkbox"
                id={`input-${state.abbreviation}`}
              />
              <label htmlFor={`input-${state.abbreviation}`}>
                {state.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
