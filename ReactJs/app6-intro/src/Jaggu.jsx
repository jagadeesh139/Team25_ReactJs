import { Component } from "react";
import Jaggudetails from "./Jaggudetails";

class Jaggu extends Component {
    constructor() {
        super()
        this.state = {
            name: "jagadeesh",
            email: "jaga@gmail.com",
            address: [],
            types: {}
        }
    }

    render() {
        return <div>
            <Jaggudetails Adetails={this.state} />


        </div>
    }
}
export default Jaggu;