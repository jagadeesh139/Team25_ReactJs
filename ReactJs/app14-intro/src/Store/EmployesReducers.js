const employe = [
    "St Emp 1",
    "St Emp 2",
    "St Emp 3",
    "St Emp 4",
    "St Emp 5"
] 

export const EmployesReducers = (state = employe, action) => {
    switch (action.type) {
        case "Create":
            break;
        case "Read":
            break;
        case "Update":
            break;
        default:
            return state;
    }
}