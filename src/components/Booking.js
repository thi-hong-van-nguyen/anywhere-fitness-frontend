import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { getBookings } from '../actions'

function Booking(props) {
    const {
        booking_id,
        class_id,
        class_type,
        class_location,
        class_date,
        class_time,
        class_duration,
        intensity_level
    } = props.booking
    const [modal, setModal] = useState(false)
    const [err, setErr] = useState('')

    const cancel = booking_id => {
        const username = localStorage.getItem('username')
        axiosWithAuth()
            .delete(`api/users/${username}/bookings/${booking_id}`)
            .then(() => {
                props.getBookings(username)
            })
            .catch(err => setErr(err.response.data.message))
    }

    return (
        <div className='booking-card'>
            <h3 className='booking-h3'>{class_type}</h3>
            <div className='booking-details'>
                <div className='booking-col booking-col-1'>
                    <div>Booking ID:</div>
                    <div>{booking_id}</div>
                </div>
                <div className='booking-col booking-col-1'>
                    <div>Class ID:</div>
                    <div>{class_id}</div>
                </div>
                <div className='booking-col booking-col-1'>
                    <div>Location:</div>
                    <div>{class_location}</div>
                </div>
                <div className='booking-col booking-col-1'>
                    <div>Date:</div>
                    <div>{class_date}</div>
                </div>
                <div className='booking-col booking-col-1'>
                    <div>Time:</div>
                    <div>{class_time}</div>
                </div>
                <div className='booking-col booking-col-1'>
                    <div>Duration:</div>
                    <div>{class_duration}</div>
                </div>
                <div className='booking-col booking-col-1'>
                    <div>Intensity Level:</div>
                    <div>{intensity_level}</div>
                </div>
            </div>
            <div>
                <button className='btn' onClick={() => setModal(true)}>cancel</button>
            </div>
            {modal ? <Modal
                setModal={setModal}
                id={booking_id}
                handleYes={cancel}
                err={err}
            /> : <></>}
        </div>
    )
}

export default connect(null, { getBookings })(Booking)
