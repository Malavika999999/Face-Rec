import React, { useState } from 'react';
import './app.css';

const Box = ({ boxName, onNextBox }) => {
  const handleBoxClick = () => {
    onNextBox();
  };

  return (
    <button className="box" onClick={handleBoxClick}>
      <div className="subHeading">
        <h2>{boxName}</h2>
      </div>
    </button>
  );
};

function Take() {
  const [currentBox, setCurrentBox] = useState(1);
  const [selectedPeriod, setSelectedPeriod] = useState(1);

  const handleNextBox = () => {
    setCurrentBox(currentBox + 1);
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(Number(event.target.value));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>TAKE</h1>
      </div>
      <Box boxName="Rec Video" onNextBox={handleNextBox} />
      <Box boxName="View recorded video" onNextBox={handleNextBox} />
      <Box boxName="Mark attendance" onNextBox={handleNextBox} />

      {/* Additional dropdown for selecting periods */}
      {currentBox >= 3 && (
        <div className="periodsBox">
          <label htmlFor="periods">Periods:</label>
          <select id="periods" value={selectedPeriod} onChange={handlePeriodChange}>
            {[1, 2, 3, 4, 5, 6, 7].map((period) => (
              <option key={period} value={period}>
                {period}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Take;
