import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div>
        <Link to="/"  style={{color: 'black'}}>
          <h1 id='page-title' className='merriweather-regular'>JSchang.dev</h1>
        </Link>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className='links-display'>
          <a href='/' onClick={toggleMenu} className='merriweather-regular'><li>Home</li></a>
          <a href='#projects' onClick={toggleMenu} className='merriweather-regular'><li>Projects</li></a>
          <a href='#contact' onClick={toggleMenu} className='merriweather-regular'><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
