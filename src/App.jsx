import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
