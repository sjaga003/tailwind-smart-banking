import React, { useEffect, useState } from 'react';
import logo from '../img/banksafe_logo.svg';
import burger from '../img/icon-hamburger.svg';
import close from '../img/icon-close.svg';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style = 'overflow-y: hidden';
    } else {
      document.body.style = 'overflow-y: auto';
    }
  }, [navOpen]);

  return (
    <>
      <nav className="flex px-4 w-full justify-between py-6">
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

        <img className="h-8" src={logo} alt="Logo" />
        <span
          className="flex self-center cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <img src={close} onClick={() => setNavOpen(false)} alt="close" />
          ) : (
            <img src={burger} onClick={() => setNavOpen(true)} alt="burger" />
          )}
        </span>
      </nav>
      {navOpen && (
        <div
          onClick={(e) => {
            setNavOpen(false);
          }}
          className="w-full h-screen bg-gradient-to-b from-gray-800 fixed"
        >
          <ul
            onClick={(e) => e.stopPropagation()}
            className="bg-white m-4 rounded-md flex flex-col items-center p-8 text-lg"
          >
            <li className="pb-2 cursor-pointer hover:text-green-500">Home</li>
            <li className="pb-2 cursor-pointer hover:text-green-500">About</li>
            <li className="pb-2 cursor-pointer hover:text-green-500">
              Contact
            </li>
            <li className="pb-2 cursor-pointer hover:text-green-500">Blog</li>
            <li className=" cursor-pointer hover:text-green-500">Career</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
