import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer';
import LogoutButton from '../../images/Logout.png';

class Logout extends React.Component {

    logout () {
        axios.delete('/api/logout').then(() => {
            this.props.requestUserData();
        });
    }

    render () {
        return (
            <div className='links'>
                <img src={LogoutButton} alt='Logout' className='header-img' onClick={() => this.logout()}/>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps, {requestUserData}) (Logout);