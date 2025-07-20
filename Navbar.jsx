import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">🏋️ Gym Manager</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plans">Plans</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/trainers">Trainers</Link></li>
          <li><Link to="/payments">Payments</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
