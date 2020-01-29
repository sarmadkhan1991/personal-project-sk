import React from 'react';
import axios from 'axios';
import './Login.css';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer';
import login from '../../images/Logininverted.png';
import register from '../../images/Registerinverted.png';

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

    async login () {
        const {email, password} = this.state;
        await axios.post('/api/login', {email, password}).then(() => {
            this.props.requestUserData();
            this.props.history.push('/shop');
        })
    }

    async register () {
        const {email, password, firstName, lastName} = this.state;
        await axios.post('/api/register', {email, password, firstName, lastName}).then(() => {
            this.setState({registering: false})
        });
    }

    render() {
        const {registering} = this.state;
        if (registering === true) {
            return (
                <div className='login-container'>
                    <input type='email' name='email' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='email' required className='input'/>
                    <input type='password' name='password' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='password' required className='input'/>
                    <input type='text' name='firstName' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='First Name' required className='input'/>
                    <input type='text' name='lastName' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='Last Name' required className='input'/>
                    <img src={register} alt='register-button' onClick={() => this.register()}  className='buttons' id='register'/>
                </div>
            )
        }
        return (
            <div className='login-container'> 
                    <input type='email' name='email' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='email' className='input'/>
                    <input type='password' name='password' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} placeholder='password' className='input'/>
                    <img src={login} alt='login-button' className='buttons' onClick={this.login}/>
                    <img src={register} alt='register-button' className='buttons' onClick={() => this.setState({registering: true})} id='register'/>
                
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