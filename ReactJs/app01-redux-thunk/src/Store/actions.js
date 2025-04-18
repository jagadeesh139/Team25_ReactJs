import { axios } from "axios"

const addemployeeuser = (emp) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post("http://localhost:3000/emp", emp)
            const response = await axios.get("http://localhost:3000/emp")
            dispatch({
                type: "GET-emp",
                payload: response.data
            })
        } catch (error) { }

    }
}

const deleteemployeeuser = (emp) => {
    return async (dispatch) => {
        try {
            const resp = await axios.delete("http://localhost:3000/emp", emp.id)
            const response = await axios.get("http://localhost:3000/emp")
            dispatch({
                type: "Delete-emp",
                payload: response.data
            })

        } catch (error) {

        }

    }

}

