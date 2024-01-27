import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

const Box = ({ boxName, to }) => (
  <Link to={to} className="box">
    <div className="subHeading">
      <h2>{boxName}</h2>
    </div>
  </Link>
);

function Home() {
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>HOME</h1>
      </div>
      <Box boxName="Take Attendance" to="/Take" />
      <Box boxName="Classes" to="/clasess" />
      <Box boxName="View" to="/seen" />
    </div>
  );
}

export default Home;
