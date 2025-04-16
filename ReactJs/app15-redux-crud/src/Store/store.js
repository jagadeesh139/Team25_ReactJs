import { createStore, combineReducers } from "redux"
import Student from "../Components/Student"
import StudentReducers from "./StudentReducers"
const rootReducer = combineReducers({
    student: StudentReducers

})
const store = createStore(rootReducer)
export default store;