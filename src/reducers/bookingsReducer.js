import { FETCH_BOOKINGS_START, FETCH_BOOKINGS_SUCCESS, FETCH_BOOKINGS_FAILURE } from "../actions"
const initialState = {
    isFetching: false,
    bookings: [],
    errors: ''
}

export const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKINGS_START:
            return ({
                ...state,
                isFetching: true,
                bookings: [],
                errors: ''
            })
        case FETCH_BOOKINGS_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                bookings: action.payload,
                errors: ''
            })
        case (FETCH_BOOKINGS_FAILURE):
            return ({
                ...state,
                isFetching: false,
                bookings: [],
                errors: action.payload
            })
        default:
            return state

    }
}