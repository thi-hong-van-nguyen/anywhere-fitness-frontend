import { LOGIN } from '../actions'

const initialState = {
    login: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return ({
                ...state,
                login: action.payload
            })
        default:
            return state
    }

}
