import { Component } from "react";
import Stdform from "./Stdform";
import StdTable from "./StdTable";
import "./Std.css"

class Std extends Component {
    constructor() {
        super()
        this.state = {
            student: {
                name: "",
                email: "",
                gender: "",
                course: "",
                contact: "",
                batch: "",
            },
            register: [],
            allStudents: [],
            editindex: null
        }
    }
    handelevent = (e) => {
        const newstudent = { ...this.state.student }
        newstudent[e.target.name] = e.target.value
        this.setState({ student: newstudent })

    }
    handelregister = () => {
        if (this.state.register.length >= 5) {
            alert("Maximum 5 students can be registered.");
            return;
        }

        const newstudent = { ...this.state.student };
        const newregister = [...this.state.register, newstudent];
        const newAll = [...this.state.allStudents, newstudent];

        this.setState({
            register: newregister,
            allStudents: newAll
        });

        this.clearform();
    }
    filterByCourse = course => {
        const filtered = this.state.allStudents.filter(
            std => std.course.toLowerCase() === course.toLowerCase()
        );
        this.setState({ register: filtered });
    }

    resetFilter = () => {
        this.setState({ register: this.state.allStudents });
    }

    handeldelete = (i) => {
        const newregister = [...this.state.register]
        newregister.splice(i, 1)
        this.setState({ register: newregister })


    }
    handeledit = (std, i) => {
        this.setState({ student: std, editindex: i });
    }

    handelUpdate = () => {
        const newregister = [...this.state.register];
        const newAllStudents = [...this.state.allStudents];

        if (this.state.editindex !== null) {
            newregister[this.state.editindex] = this.state.student;


            const indexInAll = newAllStudents.findIndex(std => std.email === this.state.student.email);
            if (indexInAll !== -1) {
                newAllStudents[indexInAll] = this.state.student;
            }

            this.setState({
                register: newregister,
                allStudents: newAllStudents,
                editindex: null,
            });
            this.clearform();
        }
    } 
    clearform = () => {
        this.setState({
            student: {
                name: "",
                email: "",
                gender: "",
                course: "",
                contact: "",
                batch: "",
            }

        })
    }
    render() {
        return <div>
            <Stdform editindex={this.state.editindex}
                student={this.state.student}
                handelevent={this.handelevent}
                handelregister={this.handelregister}
                handelupdate={this.handelUpdate} />
            <br />
            <div>
                <h2>Filter by course</h2>
                <button onClick={() => this.filterByCourse("Front end")}>Front end</button>
                <button onClick={() => this.filterByCourse("BackEnd")}>BackEnd</button>
                <button onClick={() => this.filterByCourse("FullStack")}>FullStack</button>
                <button onClick={this.resetFilter}>Reset Filter</button>
            </div>

            <StdTable register={this.state.register}
                handeledit={this.handeledit}
                handeldelete={this.handeldelete} />

        </div>
    }
}
export default Std;