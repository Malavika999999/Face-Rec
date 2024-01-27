// Addc.js
import React, { useState } from 'react';
import './app.css';

const Addc = () => {
  const [currentBox, setCurrentBox] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2022); // Initial year
  const [selectedBranch, setSelectedBranch] = useState('cs'); // Initial branch

  const handleNextBox = () => {
    setCurrentBox(currentBox + 1);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  const handlePhotoUpload = () => {
    // Handle photo upload logic
    // You can add your logic here
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Add Classes Page</h1>
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
          <label htmlFor="photo">Upload Photo:</label>
          <input type="file" id="photo" onChange={handlePhotoUpload} />
        </div>
      )}
      <button className="box" onClick={handleNextBox}>
        <div className="subHeading">
          <h2>Next</h2>
        </div>
      </button>
    </div>
  );
};

export default Addc;

