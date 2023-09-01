import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.png';
import add from '../../Assets/Add.png';
import home from '../../Assets/Home.png';
import account from '../../Assets/Account.png';
import login from '../../Assets/Login.png';
import { NavLink, useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("userName");
    navigate('/login');
  };
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul className="menu">
            {localStorage.getItem('token') ? (
              <li>
                <NavLink to="/create" activeClassName="active">
                  <img className="header-menu-icons" src={add} alt="Create" /> Create
                </NavLink>
              </li>
            ) : null}
            <li>
              <NavLink to="/home" activeClassName="active">
                <img className="header-menu-icons" src={home} alt="Home" /> Home
              </NavLink>
            </li>
            {localStorage.getItem('token') ? (
            <li>
              <NavLink to="/profile" activeClassName="active">
                <img className="header-menu-icons" src={account} alt="Profile" /> Profile
              </NavLink>
            </li>
             ) : null}
            {localStorage.getItem('token') ? null : (
              <li>
                <NavLink to="/login" activeClassName="active">
                  <img className="header-menu-icons" src={login} alt="Login" /> Login
                </NavLink>
              </li>
            )}
            {localStorage.getItem('token') ? (
              <li>
                {/* Omitting the "to" attribute to make the link inactive */}
                <button className="menu-button" onClick={handleLogout}>
                  <img className="header-menu-icons" src={login} alt="Logout" /> Logout
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
