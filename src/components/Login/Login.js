import React from 'react';
import axios from 'axios';
import './Login.css';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer';

class Login extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            registering: false,
            email: '',
            password: '',
            firstName:'',
            lastName:''
        }
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    changeHandler (key, val) {
        this.setState({
            [key]: val
        })
    }

    login () {
        const {email, password} = this.state;
        axios.post('/api/login', {email, password}).then(res => {
            this.props.requestUserData();
        })
        this.props.history.push('/shop');
    }

    async register () {
        const {email, password, firstName, lastName} = this.state;
        await axios.post('/api/register', {email, password, firstName, lastName});
        this.setState({registering: false})
    }

    render() {
        const {registering} = this.state;
        if (registering === true) {
            return (
                <div className='login-container'>
                    Register:
                    <input type='email' name='email' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='email' required/>
                    <input type='password' name='password' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='password' required/>
                    <input type='text' name='firstName' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='First Name' required/>
                    <input type='text' name='lastName' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='Last Name' required/>
                    <button onClick={this.register}>Submit</button>
                </div>
            )
        }
        return (
            <div className='login-container'>
                
                    Login:
                    <input type='email' name='email' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='email'/>
                    <input type='password' name='password' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='password'/>
                    <button onClick={this.login}>Submit</button>
                    Register:
                    <button onClick={() => this.setState({registering: true})}>Register</button>
                
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