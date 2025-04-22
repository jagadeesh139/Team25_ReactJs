import { Component } from "react";

class UserDetails extends Component{
    constructor() {
        super()
        this.state = {
            student: {
                name: "",
                email: "",
                course: "",
                gender: "",
                year: ""
            },
            register: [],
            editindex: null,
            studentmaxlimit: 10
        }
    }
    handelevent = (e) => {
        const newstudent = { ...this.state.student }
        newstudent[e.target.name] = e.target.value
        this.setState({ student: newstudent })
    }

    register = () => {
        const newregister={...this.state.student}
        newregister.push(...student)

    }
}
export default UserDetails;