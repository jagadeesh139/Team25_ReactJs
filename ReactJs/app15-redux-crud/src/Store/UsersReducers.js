const user = ["user1", "user2", "user3", "user4"]

const UsersReducers = (state = user, action)
switch (action.type) {
    case "CREATE":
        return [...state, action.payload]
        break;
    case "UPDATE":
        const newuser = [...state]
        newuser[action.payload.index] = action.payload.user
        break;
    case "DELETE":
        return state.filter((usr)=>{})
        break;

}
export default UsersReducers;