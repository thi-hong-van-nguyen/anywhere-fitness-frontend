import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBookings } from '../actions'
import Booking from './Booking'

function Bookings(props) {
    const username = localStorage.getItem('username')
    useEffect(() => {
        props.getBookings(username)
    }, [])

    console.log('bookings renders')
    return (
        <div className='bookings'>
            <div className='bookings-wrap'>
                <div className='bookings-title'>
                    <h3><span>{username}</span>&apos;s Class Reservations</h3>
                    <div>Enjoy Your Classes Built With
                        <i className="fa fa-heart fa-booking" ></i>
                        <i className="fa fa-heart fa-booking" ></i>
                        <i className="fa fa-heart fa-booking" ></i>
                    </div>
                </div>
                <div className='bookings-cards'>
                    {props.bookings.map(booking => <Booking booking={booking} key={booking.booking_id} />)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        login: state.login.login,
        bookings: state.bookings.bookings
    })
}
export default connect(mapStateToProps, { getBookings })(Bookings)
