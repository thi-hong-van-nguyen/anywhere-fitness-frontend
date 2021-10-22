import React from 'react'

export default function Booking(props) {
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

    return (
        <div className='booking-card'>
            <h3>{class_type}</h3>
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
                    <div>Intensity Level</div>
                    <div>{intensity_level}</div>
                </div>
            </div>
        </div>
    )
}