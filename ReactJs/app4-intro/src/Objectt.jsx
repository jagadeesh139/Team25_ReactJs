import { Component } from "react";

class Objectt extends Component {
    constructor() {
        super()
        this.state = {
            student: {
                fname: "jagadeesh",
                lname: "M",

            }
        }
    }
    obt = () => {
        this.setState({
            student: {
                fname: "Chandu",
                lname: "M",

            }

        })
    }

    render() {
        return <div>
            <h2>welcome to Object !!!!</h2>
            <ul>
                <li>{this.state.student.fname}</li>
                <li>{this.state.student.lname}</li>
            </ul>

            <button onClick={this.obt} >update Object</button>
        </div>
    }
}
export default Objectt;