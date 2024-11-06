import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg'; // Update if you use a different logo
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to My React App - Explore More Below!</p>
          <nav>
            <Link to="/" className="App-link">Home</Link>
            <Link to="/about" className="App-link">About</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

