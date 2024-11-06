import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg'; // Update if you use a different logo
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

