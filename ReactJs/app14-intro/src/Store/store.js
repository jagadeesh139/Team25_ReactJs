import { createStore, combineReducers } from "redux";
import { EmployesReducers } from "./EmployesReducers";
import StudentReducers from "./StudentReducers";


const rootReducer = combineReducers({
    employe: EmployesReducers,
    Student: StudentReducers,
    Users: null

})

const store = createStore(rootReducer)
export default store