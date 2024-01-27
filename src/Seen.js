// seen.js
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

function Seen() {
  const [currentBox, setCurrentBox] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2022); // Initial year
  const [selectedBranch, setSelectedBranch] = useState('cs'); // Initial branch
  const [selectedPeriod, setSelectedPeriod] = useState(1); // Initial period
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initial date

  const handleNextBox = () => {
    setCurrentBox(currentBox + 1);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>View / Download Attendance</h1>
      </div>
      {currentBox === 1 && (
        <div className="box">
          <label htmlFor="year">Year:</label>
          <select id="year" value={selectedYear} onChange={handleYearChange}>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
          </select>
        </div>
      )}
      {currentBox === 2 && (
        <div className="box">
          <label htmlFor="branch">Branch:</label>
          <select id="branch" value={selectedBranch} onChange={handleBranchChange}>
            <option value="cs">CS</option>
            <option value="ec">EC</option>
            <option value="ee">EE</option>
            <option value="me">ME</option>
          </select>
        </div>
      )}
      {currentBox === 3 && (
        <div className="box">
          <label htmlFor="period">Period:</label>
          <select id="period" value={selectedPeriod} onChange={handlePeriodChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            {/* Add more options as needed */}
          </select>
        </div>
      )}
      {currentBox === 4 && (
        <div className="box">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
        </div>
      )}
      <Box boxName="Next" onNextBox={handleNextBox} />
      <Box boxName="View" onNextBox={handleNextBox} />
      <Box boxName="Downlod" onNextBox={handleNextBox} />
    </div>
  );
}

export default Seen;
