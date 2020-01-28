import React, { Component } from 'react'
import axios from 'axios'
import { setUser } from '../../ducks/reducer'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class Login extends Component {
    state = {
        usernameInput: '',
        passwordInput: ''
    }
    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    login = () => {
        const {
            usernameInput: username,
            passwordInput: password
        } = this.state
        axios.post('/api/auth/login', {username, password}).then(res => {
            const {username, tb_user_id, tb_pic} = res.data.user
            this.props.setUser({username, tb_user_id, tb_pic})
            this.props.history.push('/home')
        })
        .catch(err => alert(err,'eyyy wadda ya doin?!'))
    }
    render() {
        return (
            <div 
            // onClick={console.log(this.props)}
            >
                Login here
                <div>
                    <input onChange={e => this.handleChange(e, 'usernameInput')}/>
                </div>
                <div>
                    <input onChange={e => this.handleChange(e, 'passwordInput')}/>
                </div>
                <button onClick={() => this.login()}>eyy click me to login</button>
            </div>
        )
    }
}

export default connect(
    null,
    { setUser }
)(withRouter(Login))