import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddDishForm from './components/AddDishForm';
import Navbar from './components/Navbar';
import Slides from './components/Slide';
import Menu from './components/Menu';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Slides />} />
        <Route path="/add-dish" element={<AddDishForm />} />
        <Route path="/menu" element={<Menu />} />
        {/* Add more routes here as needed */}
      </Routes>
    </div>
  );
}

export default App;
