import React from 'react';
import '../styles/web.css';  // Make sure the correct path is used

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="d.png" className="logo-img"/>
        <h2>Devin Tech</h2>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="join-btn">Join Now</button>
    </nav>
  );
}

export default Nav;
