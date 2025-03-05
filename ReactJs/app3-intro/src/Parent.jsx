import { Component } from "react";

class Parent extends Component {
    constructor() {
        super()
        this.state = {
            student: {
                fname: "kiran",
                lname: "kumar"
            },
            person: ["sanjay", "kumar"]
        }
    }
    render() {
        return <div>
            <ul><li>{this.state.student.fname}</li></ul>
            <ul><li>{this.state.student.lname}</li></ul>

            <ul>{this.state.person.map(function (value) {
                return <li>{value}</li>

            })}</ul>
        </div>
    }
}
export default Parent;