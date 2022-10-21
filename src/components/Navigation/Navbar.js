import React from 'react';
import { Link } from 'react-router-dom';
import { UilEstate, UilMicrophone, UilSetting } from '@iconscout/react-unicons';

const Navbar = () => (
  <nav className="navbar">
    <div className="back">
      <Link to="/">
        <UilEstate />
      </Link>
    </div>
    <div className="app-title">
      Disney Tribe
    </div>
    <div className="app-icons">
      <div className="mic">
        <UilMicrophone />
      </div>
      <div className="setting">
        <UilSetting />
      </div>
    </div>
  </nav>
);

export default Navbar;
