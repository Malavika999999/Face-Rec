import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function Clasess() {
  const navigate = useNavigate();
  const [currentBox, setCurrentBox] = useState(1);

  const handleNextBox = () => {
    setCurrentBox(currentBox + 1);

    // Move to Addc when clicking "Add clasess"
    if (currentBox === 1) {
      navigate('/addc');
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Clasess</h1>
      </div>
      <Box boxName="Add clasess" onNextBox={handleNextBox} />
      <Box boxName="Delete claesess" onNextBox={handleNextBox} />
      <Box boxName="Edit class detailse" onNextBox={handleNextBox} />
    </div>
  );
}

export default Clasess;
