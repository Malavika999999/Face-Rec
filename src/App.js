// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Seen from './Seen';
import Clasess from './Clasess';
import Take from './Take';
import Addc from './Addc'; // Import the Addc component
import './app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="mainHeading">
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seen" element={<Seen />} />
          <Route path="/take" element={<Take />} />
          <Route path="/clasess" element={<Clasess />} />
          <Route path="/addc" element={<Addc />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

