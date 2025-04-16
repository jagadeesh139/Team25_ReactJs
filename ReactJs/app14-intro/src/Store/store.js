import { createStore, combineReducers } from "redux";
import { EmployesReducers } from "./EmployesReducers";
import StudentReducers from "./StudentReducers";
import usersdetails from "./UsersReducers";
import Users from "../Components/Users";


const rootReducer = combineReducers({
    employe: EmployesReducers,
    Student: StudentReducers,
    users: Users

})

const store = createStore(rootReducer);
export default store