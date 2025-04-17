const adduserAction = (user) => {
    return {
        type: "CREATE",
        payload: user
    }
}
const deleteuserAction = (user) => {
    return {
        type: "DELETE",
        payload: user
    }
}
const UpdateuserAction = (data) => {
    return {
        type: "UPDATE",
        payload: data
    }
}