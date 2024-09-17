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
          <h1 className='merriweather-regular'>JSchang.dev</h1>
        </Link>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className='links-display'>
          <li><Link to="/" onClick={toggleMenu} className='merriweather-regular'>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className='merriweather-regular'>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu} className='merriweather-regular'>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className='merriweather-regular'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
