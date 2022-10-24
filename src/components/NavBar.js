import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

import Logo from '../assets/images/Logo.png';

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <Link to="/">
        <img className="nav-logo" src={Logo} alt="logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav-home" to="/">
          Home
        </Link>
        <a className="nav-exercises" href="#exercises">
          Exercises
        </a>
      </div>
    </div>
  );
};

export default NavBar;
