import { Component } from "react";
import UserComponent from "../UserComponent";

class ChildComponent extends Component {
    constructor() {
        super()


    }
    render() {
        return <div>
            <h2>welcome to Child Component..!!</h2>
            <UserComponent msg={this.props.msg} />

        </div>
    }
}
export default ChildComponent;