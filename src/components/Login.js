import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { useForm } from '../hooks/useForm'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import loginSchema from '../services/loginSchema'
import { loginStatus } from '../actions'

const initValues = {
    username: '',
    password: ''
}
const initError = {
    username: '',
    password: ''
}

function Login(props) {
    const [loginValues, errors, change, disabled] = useForm(initValues, initError, loginSchema)
    const [err, setErr] = useState('')
    const { push } = useHistory()

    const submit = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('/api/users/login', loginValues)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('role', res.data.role_name)
                localStorage.setItem('username', res.data.username)
                props.loginStatus(true)
                push('/')
            })
            .catch(err => {
                setErr(err.response.data.message)
            })
    }

    const { username, password } = loginValues

    return (
        <div className='login'>
            <div className='login-wrap'>
                <div className='login-form-wrap'>

                    <div className='login-form-title'>
                        <h2>log in</h2>
                    </div>

                    <form className='login-form' onSubmit={submit}>
                        <div>
                            <label> Username:
                                <br />
                                <input
                                    type='text'
                                    name='username'
                                    value={username}
                                    onChange={change}
                                />
                            </label>
                        </div>
                        <div className='error'>{errors.username}</div>
                        <div>
                            <label> Password:
                                <br />
                                <input
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={change}
                                />
                            </label>
                        </div>
                        <div className='error'>{errors.password ? errors.password : err}</div>
                        <div>
                            <button
                                className='login-btn'
                                disabled={disabled}
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default connect(null, { loginStatus })(Login)
