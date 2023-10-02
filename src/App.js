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

/*FROM nginx:1.19.0
WORKDIR /the/workdir/path
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g","daemon off;" ] */