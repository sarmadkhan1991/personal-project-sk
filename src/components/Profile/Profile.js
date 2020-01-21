import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUserData} from '../../redux/userReducer';

class Profile extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            editing: false,
            id: this.props.user.id,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateUserInfo = this.updateUserInfo.bind(this);
    }

    toggleEdit () {
        if (this.state.editing === false){
            this.setState({
            editing: true})
        }else {
            this.setState({
                editing: false
            })
        }
    }

    changeHandler (key, val) {
        this.setState({
            [key]: val
        })
    }

    updateUserInfo() {
        const {id, firstName, lastName, email, password} = this.state;
        const {cart, total} = this.props.user;
        axios.put('/api/update-user', {id, firstName, lastName, email, password, cart, total}).then(res =>{
            const {firstName, lastName, email} = res.data;
            this.props.updateUserData(res.data);
            this.setState({
                editing: false,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: ''
            })
        });

    }

    submitForm (e) {
        e.preventDefault();
    }

    render () {
        // console.log(this.props.user);
        const {firstName, lastName, email} = this.props.user;
        if (this.state.editing === true){
            return (
                <form onSubmit={this.submitForm}>
                    First Name:
                    <input type='text' name='firstName' placeholder={firstName} onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/>
                    Last Name:
                    <input type='text' name='lastName' placeholder={lastName} onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/>
                    Email:
                    <input type='email' name='email' placeholder={email} onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/>
                    Password:
                    <input type='password' name='password' placeholder='password' onChange={(e) => this.changeHandler(e.target.name, e.target.value)}/>
                    <button type='submit' onClick={() => this.updateUserInfo()}>Submit</button>
                </form>
            )
        } else {
            return (
                <div className='profile-container'>
                    <div>Profile:</div>
                    <div>First Name: {firstName}</div>
                    <div>Last Name: {lastName}</div>
                    <div>Email: {email}</div>
                    <button onClick={() => this.toggleEdit()}>Edit</button>
                </div>
            )
        }
    }
}

function mapStateToProps (reduxState) {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps, {updateUserData}) (Profile);