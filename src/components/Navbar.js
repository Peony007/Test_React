import React from 'react';

import NavbarButton from './navbarButton';
import '../assets/styles/home.css'
// import './App.css';

function Navbar() {
  return (
    <div className="navbar">
        <span className="navbar__text">JD</span>
        <div className="navbar__buttons">
          <NavbarButton className="navbar__buttons__button" text = "Button1" />
          <NavbarButton text = "Button2" className="navbar__buttons__button"/>
          <NavbarButton text = "Button3" className="navbar__buttons__button"/>

        </div>
        <span>
          <img src=""></img>
          <facebookBtn className="facebookBtn" />
          <facebookBtn />
        </span>
    </div>
  );
}

export default Navbar;