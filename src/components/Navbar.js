import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="nav-wrapper transparent black-text">
      <div className="container">
        <a className="brand-logo">&#x0003C;RAYFOLIO /&#x0003E;</a>
        <ul className="right">
          <li><NavLink to='/'>Intro</NavLink></li>
          <li><NavLink to='/about'>About Me</NavLink></li>
          <li><NavLink to='/about-you'>About You</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;