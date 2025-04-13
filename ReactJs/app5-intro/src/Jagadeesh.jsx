import { Component } from "react";
import Ch from "./Ch";

class Jagadeesh extends Component {
    constructor() {
        super()

        this.state = {
            fname: "jagadeesh",
            lname: "M",
            email: "jaga@gamil.com"
        }
    }
    render() {
        return <div>
            <Ch all={this.state} />
        </div>

    }
}
export default Jagadeesh;