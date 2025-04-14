import { Component } from "react";

class Child extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <h2>welcome to my Component</h2>
            <h2>{this.props.all.fname}</h2>
        </div>
    }
}
export default Child;