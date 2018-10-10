import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@auth0/cosmos';
/* import M from '../../node_modules/materialize-css/dist/js/materialize'; */

class Navbar extends Component {
  componentDidMount() {
    console.log('WHO GOT THE PROPS: ', this.props.M);
    var elem = document.querySelector('.sidenav');
    this.props.M.Sidenav.init(elem, {});
  }

  render(){
    return(
      <div>
        <nav className="nav-wrapper transparent black-text">
          <div className="row">
            <div className="col l6">
              <a className="brand-logo">&#x0003C;RAYFOLIO /&#x0003E;</a>
              <a href="#!" className="sidenav-trigger" data-target="mobile-links">
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

        <ul className="sidenav" id="mobile-links">
          <li><NavLink to='/' className="sidenav-close">Intro</NavLink></li>
          <li><NavLink to='/about' className="sidenav-close">About Me</NavLink></li>
          <li><NavLink to='/about-you' className="sidenav-close">About You</NavLink></li>
          <div className="divider"></div>
          <li>
            <Link href="https://github.com/ray760?tab=repositories">
              <i className="fa fa-github" aria-hidden="true"></i>
                GitHub
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/rayarobertson">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
                Likedin Profile
            </Link>
          </li>
          <li>
            <Link href="http://www.rayfolio.com/auth0/docs/Ray-Robertson-Resume-2018.pdf">
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