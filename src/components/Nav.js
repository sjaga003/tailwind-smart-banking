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
      <nav className="py-4">
        <div className="hidden lg:flex px-20 xl:px-60 w-full justify-between">
          <div>
            <img className="h-10" src={logo} alt="Logo" />
          </div>

          <ul className="flex gap-8 items-center text-secondary-300">
            <li className="cursor-pointer hover:text-green-500">Home</li>
            <li className="cursor-pointer hover:text-green-500">About</li>
            <li className="cursor-pointer hover:text-green-500">Contact</li>
            <li className="cursor-pointer hover:text-green-500">Blog</li>
            <li className="cursor-pointer hover:text-green-500">Careers</li>
          </ul>

          <div className="flex items-center">
            <button className="button">Request Invite</button>
          </div>
        </div>

        <div className="lg:hidden flex px-4 w-full justify-between">
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
        </div>
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
