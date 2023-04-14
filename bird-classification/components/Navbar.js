// Navbar.js

import React, { useState } from 'react';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-red-500 to-white text-white px-8 py-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="font-bold text-xl flex items-center cursor-pointer text-black">
            <img
              src="/icon.png"
              className="w-8 h-8 mr-2"
              onError={(e) => (e.target.style.display = 'none')}
            />
            Bird Classifier
          </div>
        </Link>

        <div className="hidden md:flex space-x-4">
          <NavbarLinks />
        </div>

        <div className="flex md:hidden">
          <button
            className="outline-none mobile-menu-button text-black"
            onClick={toggleMenu}
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2"></rect>
              <rect y="11" width="24" height="2"></rect>
              <rect y="18" width="24" height="2"></rect>
            </svg>
          </button>
        </div>

        <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
