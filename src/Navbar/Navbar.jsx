import React, { useState } from 'react';
import './Navbar.css';
import { FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAuthClick = () => {
    navigate('/auth');
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="FarmTrack logo" className="logo" />
      </div>

      <div className="nav-links desktop-only">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/activity" className={({ isActive }) => isActive ? 'active' : ''}>
          Activity Logging
        </NavLink>
        <NavLink to="/reporting" className={({ isActive }) => isActive ? 'active' : ''}>
          Reporting and Analytics
        </NavLink>
      </div>

      <div className="navbar-right desktop-only">
        <button className="sign-in-button" onClick={handleAuthClick}>
          <FaSignInAlt className="icon" /> Get Started
        </button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/activity" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Activity Logging
        </NavLink>
        <NavLink to="/reporting" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Reporting and Analytics
        </NavLink>
        <button className="sign-in-button" onClick={handleAuthClick}>
          <FaSignInAlt className="icon" /> Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
