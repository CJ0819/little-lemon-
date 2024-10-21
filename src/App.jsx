import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes here */}
          <Route path="/Aboutus" element={<Aboutus/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
