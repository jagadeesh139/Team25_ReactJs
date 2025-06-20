import { createStore, combineReducers } from "redux";
import { EmployesReducers } from "./EmployesReducers";
import StudentReducers from "./StudentReducers";
import usersdetails from "./UsersReducers";
import Users from "../Components/Users";
import UsersReducers from "./UsersReducers";


const rootReducer = combineReducers({
    employe: EmployesReducers,
    Student: StudentReducers,
    users: UsersReducers

})

const store = createStore(rootReducer);
export default store 