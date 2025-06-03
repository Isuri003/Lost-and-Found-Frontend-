import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Lost & Found</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/items">Items</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/items/add">Add</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/items/search">Search</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    <i className="bi bi-house"></i> Home
<i className="bi bi-search"></i> Search
<i className="bi bi-box-arrow-in-right"></i> Login

    
    </nav>
  );
};

export default Navbar;
