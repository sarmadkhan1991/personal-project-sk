import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer';

class Logout extends React.Component {

    logout () {
        axios.delete('/api/logout');
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

function mapStateToProps(reduxState) {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps, {requestUserData}) (Logout);