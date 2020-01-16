import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';

function Nav (props) {
    if (!props.user.id) {
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
            <Link to='/login'>
                <div>Login</div>
            </Link>
            </div>
        )
    }
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
            <Logout />
        </div>
    )
}

function mapStateToProps (reduxState) {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps, null) (Nav);