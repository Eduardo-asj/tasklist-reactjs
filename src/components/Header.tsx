import React from 'react';
import '../styles/header.scss';

export function Header() {
  const handleClick = () => {
    console.log('Header clicked!');
  };

  return (
    <header className='header' onClick={handleClick}>
      <div className='logo-container'>
        <img src='/logo.svg' alt='to.do' className='logo' />
        <h1 className='title'>To-Do App</h1>
      </div>
      <nav className='navigation'>
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
    </header>
  );
}
