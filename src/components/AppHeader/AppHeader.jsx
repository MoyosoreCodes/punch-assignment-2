import AppLogo from '../AppLogo/AppLogo';
import './AppHeader.css';

function AppHeader() {
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
    </nav>
  )
}

export default AppHeader;