import React, { useState } from 'react';
import '../styles/header.scss';

export function Header() {
  // State to manage the visibility of the navigation menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the visibility of the navigation menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className='logo-container'>
        <img src='/logo.svg' alt='to.do' className='logo' />
        <h1 className='title'>To-Do App</h1>
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <button className='menu-toggle' onClick={toggleMenu}>
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </header>
  );
}
