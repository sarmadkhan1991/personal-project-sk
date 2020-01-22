import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';
import Sirmud from '../../images/Sirmud.png';
// import About from '../../images/About.png';
import Contact from '../../images/Contact.png';
import Shop from '../../images/Shop.png';
import Login from '../../images/Login.png';
import Cart from '../../images/Cart.png';
import Profile from '../../images/Profile.png';

function Nav (props) {
    if (!props.user.id) {
        return (
            <div className='header'>
            <NavLink to='/' activeClassName='active'>
                <div className='links'><img src={Sirmud} alt='Sirmud Logo' className='header-img'/></div>
            </NavLink>
            {/* <NavLink to='/about' activeClassName='active'>
            <div className='links'><img src={About} alt='About' className='header-img'/></div>
            </NavLink> */}
            <NavLink to='/contact' activeClassName='active'>
            <div className='links'><img src={Contact} alt='Contact' className='header-img'/></div>
            </NavLink>
            <NavLink to='/shop' activeClassName='active'>
            <div className='links'><img src={Shop} alt='Shop' className='header-img'/></div>
            </NavLink>
            <NavLink to='/login' activeClassName='active'>
            <div className='links'><img src={Login} alt='Login' className='header-img'/></div>
            </NavLink>
            </div>
        )
    }
    return (
        <div className='header'>
            <NavLink to='/' activeClassName='active'>
            <div className='links'><img src={Sirmud} alt='Sirmud Logo' className='header-img'/></div>
            </NavLink>
            {/* <NavLink to='/about' activeClassName='active'>
            <div className='links'><img src={About} alt='About' className='header-img'/></div>
            </NavLink> */}
            <NavLink to='/contact' activeClassName='active'>
            <div className='links'><img src={Contact} alt='Contact' className='header-img'/></div>
            </NavLink>
            <NavLink to='/shop' activeClassName='active'>
            <div className='links'><img src={Shop} alt='Shop' className='header-img'/></div>
            </NavLink>
            <NavLink to='/cart' activeClassName='active'>
            <div className='links'><img src={Cart} alt='Cart' className='header-img'/></div>
            </NavLink>
            <NavLink to='/profile' activeClassName='active'>
            <div className='links'><img src={Profile} alt='Profile' className='header-img'/></div>
            </NavLink>
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