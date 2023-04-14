import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-primary text-primary p-4 text-center text-2xl font-bold">
      <Navbar />
      Bird Classifier
    </header>
  );
};

export default Header;