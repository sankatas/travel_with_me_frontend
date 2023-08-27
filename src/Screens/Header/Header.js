import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.png';
import add from '../../Assets/Add.png';
import home from '../../Assets/Home.png';
import account from '../../Assets/Account.png';
import login from '../../Assets/Login.png';
import pushNotifications from '../../Assets/Push_Notifications.png';
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
            <li><a href="#"><img className="header-menu-icons" src={add}></img> Create</a></li>
            <li><a href="#"><img className="header-menu-icons" src={home}></img> Home</a></li>
            <li><a href="#"><img className="header-menu-icons" src={account}></img> Profile</a></li>
            <li><a href="#"><img className="header-menu-icons" src={login}></img> Login</a></li>
            <li><a href="#"><img className="header-menu-icons" src={pushNotifications}></img> Notifications</a></li>
          </ul>
        </nav>
      </header>
      
    </div>
  );
}

export default Header;
