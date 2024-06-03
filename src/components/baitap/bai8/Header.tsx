import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink to="/admin" activeClassName="active">
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" activeClassName="active">
            Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
