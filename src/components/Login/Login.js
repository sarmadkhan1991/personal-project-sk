import React from 'react';
import axios from 'axios';

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
            console.log(res.data)
            const { firstName, lastName } = res.data;
            this.setState({
                firstName: firstName,
                lastName: lastName
            })
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className='login-container'>
                <input type='email' name='email' onChange={(e) => this.changeHandlerEmail( e.target.value)}/>
                <input type='password' name='password'onChange={(e) => this.changeHandlerPassword(e.target.value)}/>
                <button onClick={this.login}>Submit</button>
            </div>
        )
    }
}

export default Login;