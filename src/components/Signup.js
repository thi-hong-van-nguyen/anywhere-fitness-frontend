import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import signupSchema from '../services/signupSchema'
import { useForm } from '../hooks/useForm'

const initValues = {
    username: '',
    password: '',
    role: '',
    term: false
}
const initError = {
    username: '',
    password: '',
    role: '',
    term: ''
}

export default function Signup() {
    const [signupValues, errors, change, disabled] = useForm(initValues, initError, signupSchema)
    const [err, setErr] = useState('')
    const { push } = useHistory()

    console.log('signup renders')

    const submit = e => {
        e.preventDefault()
        const newUser = {
            username: signupValues.username,
            password: signupValues.password,
            role: signupValues.role
        }

        axios.post('https://bw-fitness-4.herokuapp.com/api/users/register', newUser)
            .then(() => {
                push('/login')
            })
            .catch(err => {
                setErr(err.response.data.message)
            })
    }

    const { username, password, role, term } = signupValues

    return (
        <div className='signup'>
            <div className='signup-wrap'>
                <div className='signup-form-wrap'>
                    <div className='signup-form-title'>
                        <h2>Join Anywhere Fitness Community</h2>
                    </div>

                    <form
                        className='signup-form'
                        onSubmit={submit}
                    >
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
                                    type='text'
                                    name='password'
                                    value={password}
                                    onChange={change}
                                />
                            </label>
                        </div>
                        <div className='error'>{errors.password}</div>
                        <div>
                            <label> Authentication code (for Instructor):
                                <br />
                                <input
                                    type='text'
                                    name='role'
                                    value={role}
                                    onChange={change}
                                />
                            </label>
                        </div>
                        <div id='term'>
                            <label>
                                <input

                                    type='checkbox'
                                    name='term'
                                    value={term}
                                    onChange={change}
                                />
                                Agree with
                                <a href='#top'>Terms of service </a>
                                and
                                <a href='#top'> Privacy policy</a>
                            </label>
                        </div>
                        <div className='error'>{errors.term ? errors.term : err}</div>
                        <div>
                            <button
                                className='signup-btn'
                                disabled={disabled}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}
