const Users = ["ravi", "kiran", "lohith"]

const UsersReducers = (state = Users, action) => {
    switch (action.type) {
        case "CREATE":
            break;
        case "READ":
            break;
        case "UPDATE":
            break;
        case "DELETE":
            break;
            default:
                return state;

    }

}
export default UsersReducers;