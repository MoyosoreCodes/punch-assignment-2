import { useState } from 'react';
import AppLogo from '../app-logo/AppLogo';
import './AppHeader.css';

function AppHeader() {
  const [menu, setMenu] = useState(false)

  function showMenu() {
    setMenu(prevState => !prevState)
  }

  function hideMenu() {
    setMenu(false)
  }

  return (
    <nav className="header-container">
      <AppLogo />

      <ul className='nav-items'>
        <li>Find work</li>
        <li>Find Talent</li>
        <li>Articles</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="login-section">
        <p>Log In</p>
        <button className='join'>
          Join now
        </button>
      </div>

      <div className="menu" onClick={showMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7L7 7M20 7L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <path d="M20 17H17M4 17L13 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          <path d="M4 12H7L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>

      <div className={`mobile_navbar ${menu ? 'in-view' : ''}`}>
        <ul className='nav-items'>
          <li onClick={hideMenu}>Find work</li>
          <li onClick={hideMenu}>Find Talent</li>
          <li onClick={hideMenu}>Articles</li>
          <li onClick={hideMenu}>About Us</li>
          <li onClick={hideMenu}>Contact Us</li>
        </ul>

        <div className="login-section">
          <p onClick={hideMenu}>Log In</p>
          <button className='join' onClick={hideMenu}>
            Join now
          </button>
        </div>
      </div>

    </nav>
  )
}

export default AppHeader;