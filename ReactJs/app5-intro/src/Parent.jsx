import { Component } from "react";
import Jaga from "./Jaga";

class Parent extends Component {
    constructor() {
        super()
        this.state = {
            fname: "Mattapalli",
            lname: "Jagadeesh",
            email: "Chandu@123gmail.com"
        }
    }
    render() {
        return <div>
            <Jaga all={this.state} />

        </div>
    }
}
export default Parent;