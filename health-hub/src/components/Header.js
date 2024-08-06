import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <h1>HealthHub</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/create-workout">Create Workout</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
