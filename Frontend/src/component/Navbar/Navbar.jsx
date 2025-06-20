import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center fw-bold fs-4 text-primary" href="#">
          <i className="fa-solid fa-note-sticky me-2 icon"></i>
          NoteApp
        </a>
        <button className="btn btn-outline-primary fw-semibold px-4">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
