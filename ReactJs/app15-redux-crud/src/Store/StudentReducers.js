const student = ["kiran", "ravi", "raju"]
const StudentReducers = (state = student, action) => {
    switch (action.type) {
        case "CREATE":
            break;
        case "READ":
            break;
        case "Update":
            break;
        case "Delete":
            break;
        default:
            return state;

    }
}
export default StudentReducers;