import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav () {
    return (
        <div className='header'>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>
            <Link to='/contact'>
                <div>Contact</div>
            </Link>
            <Link to='/shop'>
                <div>Shop</div>
            </Link>
            <Link to='/login'>
                <div>Login</div>
            </Link>
        </div>
    )
}

export default Nav;