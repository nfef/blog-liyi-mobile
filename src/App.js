import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../src/Components/Pages/Homepage/Homepage.component'
import Root from '../src/Components/Pages/Root/Root.component';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route  path='/' element={<Root/>} />
          <Route exact path='/home' element={<Homepage/>} />
      </Routes>
    </Router>
  );
}

export default App;
