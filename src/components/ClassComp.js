import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import { getClasses } from '../actions'
import Attendee from './Attendee'
import Modal from './Modal'

function ClassComp(props) {
    const {
        class_id,
        class_type,
        class_duration,
        class_location,
        class_date,
        class_time,
        intensity_level,
        attendance
    } = props.cl
    const [modal, setModal] = useState(false)
    const [err, setErr] = useState('')
    const { push } = useHistory()

    console.log('class comp render')

    const isInstructor = localStorage.getItem('role') === 'instructor'
        && props.login === true

    const isClient = localStorage.getItem('role') === 'client'
        && props.login === true

    const currrentUser = localStorage.getItem('username')

    const edit = () => {
        props.setDisplayClassForm(true)
        props.setClassToEdit(props.cl)
    }

    const del = class_id => {
        axiosWithAuth()
            .delete(`/api/classes/${class_id}`)
            .then(() => {
                props.getClasses()
            })
            .catch(err => setErr(err.response.data.message))
    }

    const handleClick = () => {
        if (!isClient) {
            setErr('you must log in in order to reserve this class')
        } else {
            axiosWithAuth()
                .post(`/api/users/${currrentUser}/bookings`, { class_id: class_id })
                .then(() => {
                    push('/bookings')
                })
                .catch(err => setErr(err.response.data.message))
        }
    }

    const buttons =
        isInstructor
            ? <div className='edit-del-book'>
                <button onClick={() => setModal(true)} className='del-btn'>Delete</button>
                <button onClick={edit} className='edit-btn'>Edit</button>
                {err ? <div>{err}</div> : <></>}
                {modal && <Modal setModal={setModal} class_id={class_id} del={del} />}
            </div>
            : <div className='edit-del-book'>
                <button onClick={() => handleClick()}>Book now!</button>
                {err ? <div>{err}</div> : <></>}
            </div>

    return (

        <div className='class-card'>
            <div className='class-name'>
                <h3>{class_type}</h3>
            </div>
            <div className='class-details'>
                <div className='cl-row cl-row-1'>
                    <div>Class ID:</div>
                    <div>{class_id}</div>
                </div>
                <div className='cl-row cl-row-2'>
                    <div>Location:</div>
                    <div>{class_location}</div>
                </div>
                <div className='cl-row cl-row-3'>
                    <div>Date:</div>
                    <div>{class_date}</div>
                </div>
                <div className='cl-row cl-row-4'>
                    <div>Time:</div>
                    <div>{class_time}</div>
                </div>
                <div className='cl-row cl-row-5'>
                    <div>Duration:</div>
                    <div>{class_duration} min</div>
                </div>
                <div className='cl-row cl-row-6'>
                    <div>Intensity Level:</div>
                    <div>{intensity_level}/10</div>
                </div>
                {isInstructor ? <div className='cl-row cl-row-7'>
                    <div>Attendees:</div>
                    {attendance.length === 0
                        ? <div>There is no student for this class yet</div>
                        : attendance.map(attendee => <Attendee attendee={attendee} key={attendee.booking_id} />)}
                </div> : <> </>}
            </div>
            {buttons}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        login: state.login.login
    })
}

export default connect(mapStateToProps, { getClasses })(ClassComp)
