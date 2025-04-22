import { Component } from "react";
import Studentform from "./Studentform";
import STdTabel from "./STdTabel";

class Student extends Component {
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

    handelregister = () => {
        const newregister = [...this.state.register]
        newregister.push(this.state.student)
        this.setState({ register: newregister })
        this.clearform()

    }

    handelDelete = (i) => {
        const newregister = [...this.state.register]
        newregister.splice(i, 1)
        this.setState({ register: newregister })

    }
    handelEdit = (std, i) => {
        { this.setState({ student: std, editindex: i }) }
    }
    handelupdate = () => {
        const newregister = [...this.state.register]
        newregister[this.state.editindex] = this.state.student
        this.setState({ regiter: newregister, editindex: null })
        this.clearform()

    }
    clearform = () => {
        this.setState({
            student: {
                name: "",
                email: "",
                course: "",
                gender: "",
                year: ""
            }
        })
    }
    render() {
        return <div>
            <Studentform student={this.state.student}
                editindex={this.state.editindex}
                handelregister={this.handelregister}
                handelupdate={this.handelupdate}
                handelevent={this.handelevent} />
                <br />
            <STdTabel register={this.state.register}
                handeledit={this.handelEdit}
                handeldelete={this.handelDelete} />
        </div>
    }
}
export default Student;