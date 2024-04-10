import React, { useState, useEffect, useRef } from 'react';
import '../styles/header.scss';

export function Header() {
  // State to manage the visibility of the navigation menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  // Ref to the navigation menu
  const menuRef = useRef(null);

  // Function to toggle the visibility of the navigation menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when user clicks outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Function to close the menu when "Esc" key is pressed
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  };

  // Effect to add event listeners when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);
    // Cleanup function to remove event listeners when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <header className='header'>
      <div className='logo-container'>
        <img src='/logo.svg' alt='to.do' className='logo' />
        <h1 className='title'>To-Do App</h1>
      </div>
      <nav ref={menuRef} className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#'>About</a>
          </li>
          {/* <li className='nav-item'>
            <a href='#'>Contact</a>
          </li> */}
        </ul>
      </nav>
      <button className='menu-toggle' onClick={toggleMenu}>
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </header>
  );
}
