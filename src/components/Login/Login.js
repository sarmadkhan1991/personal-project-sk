import React from 'react';
import axios from 'axios';
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
        this.logout = this.logout.bind(this);
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
            //const { firstName, lastName } = res.data;
            this.props.requestUserData();
            // this.setState({
            //     firstName: firstName,
            //     lastName: lastName
            // })
        })
        //this.props.history.push('/shop');
    }

    logout () {
        axios.get('/api/logout').then(res => {
            // this.setState({
            //     email: '',
            //     password: '',
            //     firstName:'',
            //     lastName:''
            // })
        })
        this.props.requestUserData()
    }

    render() {
        return (
            <div className='login-container'>
                <input type='email' name='email' onChange={(e) => this.changeHandlerEmail( e.target.value)}/>
                <input type='password' name='password'onChange={(e) => this.changeHandlerPassword(e.target.value)}/>
                <button onClick={this.login}>Submit</button>
                {/* <button onClick={this.logout}>logout</button> */}
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