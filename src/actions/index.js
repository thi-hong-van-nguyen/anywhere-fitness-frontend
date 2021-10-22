import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const LOGIN = 'LOGIN'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const FETCH_BOOKINGS_START = 'FETCH_BOOKINGS_START'
export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS'
export const FETCH_BOOKINGS_FAILURE = 'FETCH_BOOKINGS_FAILURE'

export const loginStatus = status => ({ type: LOGIN, payload: status })

export const fetchStart = () => ({ type: FETCH_START })
export const fetchSuccess = classes => ({ type: FETCH_SUCCESS, payload: classes })
export const fetchFailure = err => ({ type: FETCH_FAILURE, payload: err })

export const fetchBookingsStart = () => ({ type: FETCH_BOOKINGS_START })
export const fetchBookingsSuccess = bookings => ({ type: FETCH_BOOKINGS_SUCCESS, payload: bookings })
export const fetchBookingsFailure = err => ({ type: FETCH_BOOKINGS_FAILURE, payload: err })

export const getClasses = () => dispatch => {
    dispatch(fetchStart)
    axios.get('https://bw-fitness-4.herokuapp.com/api/classes')
        .then(res => {
            dispatch(fetchSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchFailure(err.response.data.message))
        })
}

export const getBookings = username => dispatch => {
    dispatch(fetchBookingsStart)
    axiosWithAuth()
        .get(`https://bw-fitness-4.herokuapp.com/api/users/${username}/bookings`)
        .then(res => {
            dispatch(fetchBookingsSuccess(res.data.bookings))
        })
        .catch(err => {
            dispatch(fetchBookingsFailure(err.response.data.message))
        })
}
