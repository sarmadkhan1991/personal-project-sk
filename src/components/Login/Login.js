import React from 'react';
import axios from 'axios';
import './Login.css';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer';

class Login extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            firstName:'',
            lastName:''
        }
        this.login = this.login.bind(this);
    }

    changeHandlerEmail (val) {
        this.setState({
            email: val
        })
    }

    changeHandlerPassword (val) {
        this.setState({
            password: val
        })
    }

    login () {
        const {email, password} = this.state;
        axios.post('/api/login', {email, password}).then(res => {
            this.props.requestUserData();
        })
        this.props.history.push('/shop');
    }

    render() {
        return (
            <div className='login-container'>
                Login:
                <input type='email' name='email' onChange={(e) => this.changeHandlerEmail( e.target.value)} placeholder='email'/>
                <input type='password' name='password'onChange={(e) => this.changeHandlerPassword(e.target.value)} placeholder='password'/>
                <button onClick={this.login}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps (reduxState) {
    return {
        user: reduxState
    }
}

export default connect(mapStateToProps, {requestUserData}) (Login);