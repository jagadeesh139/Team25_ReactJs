export const adduserAction = (user) => {
    return {
        type: "CREATE",
        payload: user
    }
}
export const deleteuserAction = (user) => {
    return {
        type: "DELETE",
        payload: user
    }
}
export const UpdateuserAction = (data) => {
    return {
        type: "UPDATE",
        payload: data
    }
} 