import React, { useState } from 'react';
import logo from '../img/logo.svg';
import burger from '../img/icon-hamburger.svg';
import close from '../img/icon-close.svg';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      {/* <div>
        <img src="" alt="" />
      </div>
      <div>
        <ul>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
        </ul>
      </div>
      <div>
        <button>Request Invite</button>
      </div> */}

      <img src={logo} alt="Logo" />
      {navOpen ? (
        <img src={close} onClick={() => setNavOpen(false)} alt="close" />
      ) : (
        <img src={burger} onClick={() => setNavOpen(true)} alt="burger" />
      )}
      <div>
        <ul>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
