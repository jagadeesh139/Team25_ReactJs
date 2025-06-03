
const users = [{
    "fname": "jagadeesh",
    "lname": "M",
    "email": "jagadeesh123@gmail.com",
    "password": "jagadeesh@123"
},]


const UsersReducer = (state = users, action) => {
    switch (action.type) {
        case "CREATE":
            return [...state, action.payload]

        case "UPDATE":
            return state.map((user, idx) =>
                idx === action.payload.index ? action.payload.value : user

            )
 
        case "DELETE":
            return state.filter((user) => user !== action.payload)

        default:
            return state;

    }
}
export default UsersReducer;