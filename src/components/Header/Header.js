import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="website_logo" />
            </div>
            <nav className='nav-links'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/">Login</Link>
            </nav>
        </div>
    );
};

export default Header;