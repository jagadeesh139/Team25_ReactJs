import { axios } from "axios"

const addemployeeuser = (emp) => {
    return async (dispatch) => {
        const resp = await axios.post("http://localhost:3000/emp", emp)
        const response = await axios.get("http://localhost:3000/emp")
        dispatch({
            type="GET-emp",
            payload: response.data
        })

    }
}

