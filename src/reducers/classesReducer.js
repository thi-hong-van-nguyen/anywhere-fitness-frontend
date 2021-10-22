import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions"


const initialState = {
    isFetching: false,
    classes: [],
    errors: ''
}

export const classesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return ({
                ...state,
                isFetching: true,
                classes: [],
                errors: ''
            })
        case FETCH_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                classes: action.payload,
                errors: ''
            })
        case (FETCH_FAILURE):
            return ({
                ...state,
                isFetching: false,
                classes: [],
                errors: action.payload
            })
        default:
            return state

    }
}
