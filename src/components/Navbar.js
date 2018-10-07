import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <nav className="nav-wrapper transparent black-text">
        <div className="row">
          <div className="col l6">
            <a className="brand-logo">&#x0003C;RAYFOLIO /&#x0003E;</a>
            <a href="#" class="sidebar-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
          </div>

          <div className="col l6">
            <ul className="right hide-on-med-and-down">
              <li><NavLink to='/'>Intro</NavLink></li>
              <li><NavLink to='/about'>About Me</NavLink></li>
              <li><NavLink to='/about-you'>About You</NavLink></li>
            </ul>
          </div>

        </div>
      </nav>

      <ul class="sidenav" id="mobile-links">
        <li><NavLink to='/'>Intro</NavLink></li>
        <li><NavLink to='/about'>About Me</NavLink></li>
        <li><NavLink to='/about-you'>About You</NavLink></li>
        <div className="divider"></div>        
      </ul>

    </div>
  )
}

export default Navbar;