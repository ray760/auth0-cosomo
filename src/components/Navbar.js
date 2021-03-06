import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@auth0/cosmos';

class Navbar extends Component {
  componentDidMount() {
    const elem = document.querySelector('.sidenav');
    this.props.M.Sidenav.init(elem, {});
  }

  render(){
    return(
      <div>
        <nav className="nav-wrapper transparent black-text">
          <div className="row">
            <div className="col l6">
              <Link href="/" className="brand-logo">&#x0003C;RAYFOLIO /&#x0003E;</Link>
              <a href="#!" className="sidenav-trigger" data-target="mobile-links">
                <i className="material-icons">menu</i>
              </a>
            </div>

            <div className="col l6">
              <ul className="right hide-on-med-and-down">
                <li><NavLink to='/'>Intro</NavLink></li>
                <li><NavLink to='/about'>About Me</NavLink></li>
                <li><NavLink to='/lets-chat'>Let's Chat</NavLink></li>
              </ul>
            </div>

          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <li><NavLink to='/' className="sidenav-close">Intro</NavLink></li>
          <li><NavLink to='/about' className="sidenav-close">About Me</NavLink></li>
          <li><NavLink to='/lets-chat' className="sidenav-close">Let's Chat</NavLink></li>
          <div className="divider"></div>
          <li>
            <Link href="https://github.com/ray760?tab=repositories" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
                GitHub
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/rayarobertson" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
                Likedin Profile
            </Link>
          </li>
          <li>
            <Link href="http://www.rayfolio.com/auth0/docs/Ray-Robertson-Resume-2018.pdf" target="_blank">
              <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                My Resume
            </Link>
          </li>
          <li>
            <Link href="mailto:ray760@yahoo.com?Subject=Auth0%20UI%20Engineer">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              Email Me
            </Link>
          </li>               
        </ul>

      </div>
    )
  }
}

export default Navbar;