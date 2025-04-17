import { createStore, combineReducers } from "redux";
import UsersReducers from "../../../app14-intro/src/Store/UsersReducers";
import store from "./store";

const rootreducers = combineReducers({
    users: UsersReducers
})

const Store = createStore(rootreducers)
export default store;
