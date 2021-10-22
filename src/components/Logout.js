import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginStatus } from '../actions'

function Logout(props) {
    const { push } = useHistory()

    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    props.loginStatus(false)
    push('/')

    return (
        <div></div>
    )
}

export default connect(null, { loginStatus })(Logout)
