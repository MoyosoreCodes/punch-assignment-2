import AppLogo from '../AppLogo/AppLogo';
import './AppHeader.css';

function AppHeader() {
  function showMenu() {

  }

  return (
    <header className="header-container">
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
    </header>
  )
}

export default AppHeader;