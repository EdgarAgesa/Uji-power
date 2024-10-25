import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">Uji Power</div>
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/menu">Our Menu</Link>
        <Link to="#mission">Our Mission</Link>
        <Link to="#market">The Market</Link>
        <Link to="#locations">Locations</Link>
        <Link to="/add-dish" className="add-dish-link">Add Dish</Link>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}

export default Navbar;
