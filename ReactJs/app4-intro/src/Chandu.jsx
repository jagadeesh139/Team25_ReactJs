import { Component } from "react";

class Chandu extends Component {
    constructor() {
        super()
        this.state = {
            student: {
                fname: "jaga",
                lname: "eesh",
                email: "Chandu@gmail.com"
            },
            person: ["kiran", "hari", "praveen"]
        }
    }
    obt = () => {
        this.setState({
            student: {
                fname: "Chethen",
                lname: "Chandu",
                email: "jaggu@gmail.com"
            },

            person: ["praveen", "kiran", "hari"]

        })

    }
    render() {
        return <div>
            <h2>welcome to Object and array Concepts... </h2>
            <ul>
                <li>{this.state.student.fname}</li>
                <li>{this.state.student.lname}</li>
                <li>{this.state.student.email}</li>
            </ul>
            <button onClick={this.obt}>modify Object....</button>
            <ul>
                {this.state.person.map(function (val) {
                    return <li>{val}</li>
                })
                }
            </ul>
        </div>
    }
}
export default Chandu;