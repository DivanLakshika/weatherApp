import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import All from './Components/All';
import New from './Components/New';
function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element={<All/>} />
      
      <Route path='oneCityView/:name/:country/:des/:temp/:tmin/:tmax/:pressure/:hum/:visi/:wind/:deg/:sr/:ss' element={<New/>} />
      </Routes>
   </Router>
   </div>
  );
}

export default App;
