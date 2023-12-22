import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Product from './pages/product';
import Graphs from './pages/Graphs';
import Dataset from './pages/Dataset';
import Predict from './components/Predict';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          {/* Updated route for /product */}
          <Route path="/product" element={<Product />}/>
            {/* Define a nested route for the Predict component */}
            <Route path="/product/:id/*" element={<Predict />} />
          
          <Route path="/Graphs" element={<Graphs />} />
          <Route path="/Dataset" element={<Dataset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
