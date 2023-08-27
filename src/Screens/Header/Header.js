import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.png';
import add from '../../Assets/Add.png';
import home from '../../Assets/Home.png';
import account from '../../Assets/Account.png';
import login from '../../Assets/Login.png';
import pushNotifications from '../../Assets/Push_Notifications.png';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faSignInAlt, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul className="menu">
          <li><Link to="/create"><img className="header-menu-icons" src={add} alt="Create" /> Create</Link></li>
            <li><Link to="/home"><img className="header-menu-icons" src={home} alt="Home" /> Home</Link></li>
            <li><Link to="/profile"><img className="header-menu-icons" src={account} alt="Profile" /> Profile</Link></li>
            <li><Link to="/login"><img className="header-menu-icons" src={login} alt="Login" /> Login</Link></li>
            <li><Link to="/notifications"><img className="header-menu-icons" src={pushNotifications} alt="Notifications" /> Notifications</Link></li>
          </ul>
        </nav>
      </header>
      
    </div>
  );
}

export default Header;
