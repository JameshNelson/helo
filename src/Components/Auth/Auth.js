import React, {Component} from 'react';
import axios from 'axios'; 


class Auth extends Component {
    constructor(){
        super(); 
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dash')
        })
        .catch(err => console.log(err))
    }

    handleRegister = () => {
        const {username, password} = this.state;
        axios.post('/api/auth/register', {username, password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dash')
        })
        .catch(err => console.log(err)); 
    }



    render(){
        
        return (
            <div>
                <input 
                    maxLength='20'
                    placeholder='Enter User Name'
                    name='username'
                    onChange={(event) => this.handleInput(event)}
                    />
                <input 
                    type='password'
                    maxLength='20'
                    placeholder='Enter Password'
                    name='password'
                    onChange={(event) => this.handleInput(event)}
                    />
                    <button onClick={this.handleLogin}>LOG IN!</button>
                    <button onClick={this.handleRegister}>REGISTER!</button>
            </div>
        )
    }
}

export default Auth