import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';
import Sirmud from '../../images/Sirmud.png';
import About from '../../images/About.png';
import Contact from '../../images/Contact.png';
import Shop from '../../images/Shop.png';
import Login from '../../images/Login.png';
import Cart from '../../images/Cart.png';
import Profile from '../../images/Profile.png';

function Nav (props) {
    if (!props.user.id) {
        return (
            <div className='header'>
            <Link to='/'>
                <div><img src={Sirmud} alt='Sirmud Logo' className='header-img'/></div>
            </Link>
            <Link to='/about'>
            <div><img src={About} alt='About' className='header-img'/></div>
            </Link>
            <Link to='/contact'>
            <div><img src={Contact} alt='Contact' className='header-img'/></div>
            </Link>
            <Link to='/shop'>
            <div><img src={Shop} alt='Shop' className='header-img'/></div>
            </Link>
            <Link to='/login'>
            <div><img src={Login} alt='Login' className='header-img'/></div>
            </Link>
            </div>
        )
    }
    return (
        <div className='header'>
            <Link to='/'>
            <div><img src={Sirmud} alt='Sirmud Logo' className='header-img'/></div>
            </Link>
            <Link to='/about'>
            <div><img src={About} alt='About' className='header-img'/></div>
            </Link>
            <Link to='/contact'>
            <div><img src={Contact} alt='Contact' className='header-img'/></div>
            </Link>
            <Link to='/shop'>
            <div><img src={Shop} alt='Shop' className='header-img'/></div>
            </Link>
            <Link to='/cart'>
            <div><img src={Cart} alt='Cart' className='header-img'/></div>
            </Link>
            <Link to='/profile'>
            <div><img src={Profile} alt='Profile' className='header-img'/></div>
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