import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor() {
        super()
    } 
    render() {
        return <div>
            <h1>welcome to parent Component...!!</h1>
            <ChildComponent msg={this.props.msg} />

        </div>
    }  
}
export default ParentComponent;