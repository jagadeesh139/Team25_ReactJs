import { createStore, combineReducers } from "redux"
// import Student from "../Components/Student"
// import StudentReducers from "./StudentReducers"
// import Users from "../Components/Users"
import UsersReducer from "./UsersReducers"
const rootReducer = combineReducers({
    // student: StudentReducers,
    user: UsersReducer

})
const store = createStore(rootReducer)
export default store;