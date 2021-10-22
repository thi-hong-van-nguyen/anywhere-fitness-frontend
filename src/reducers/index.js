import { combineReducers } from "redux"
import { loginReducer } from "./loginReducer"
import { classesReducer } from "./classesReducer"
import { bookingsReducer } from "./bookingsReducer"

export default combineReducers({
    login: loginReducer,
    classes: classesReducer,
    bookings: bookingsReducer
})
