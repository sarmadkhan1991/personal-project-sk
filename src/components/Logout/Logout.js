import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer';

class Logout extends React.Component {

    async logout () {
        await axios.get('/api/logout');
        this.props.requestUserData();
    }

    render () {
        return (
            <div>
                <button onClick={() => this.logout()}>logout</button>
            </div>
        )
    }
}

export default connect(null, {requestUserData}) (Logout);