const student = ["kiran", "ravi", "raju"]
const StudentReducers = (state = student, action) => {
    switch (action.type) {
        case "CREATE":
            return [...state, action.payload]
            break;
        case "READ":
            break;
        case "UPDATE":
            return state.map((student, i) => {
                i === action.payload.index ? action.payload.value : student
            })
            break;
        case "DELETE":
            return state.filter((student) => (student !== action.payload))
            break;
        default: 
            return state;
 
    }
}
export default StudentReducers;