import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Reservation from './Components/Reservation/Reservation';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="Reservation" element={<Reservation/>}/>
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
