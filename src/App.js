import './styles/App.css';
import './components/NavBar.js';
import NavBar from './components/NavBar.js';

import Home from './pages/Home.js';
import Schedule from './pages/Schedule.js';
import BridesmaidGroomsmen from './pages/BridesmaidGroomsmen.js';
import Transport from './pages/Transport.js';
import RSVP from './pages/RSVP.js';
import FAQ from './pages/FAQ.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        
        <Routes>

            <Route path="/" index element={<Home />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/BridesmaidGroomsmen" element={<BridesmaidGroomsmen />} />
            <Route path="/Transport" element={<Transport />} />
            <Route path="/RSVP" element={<RSVP />} />
            <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
