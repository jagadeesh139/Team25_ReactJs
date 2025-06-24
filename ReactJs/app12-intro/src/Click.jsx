import { Component } from "react";

class Click extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.increament}>increament</button>
            <button onClick={this.props.decreament}>decreament</button>
            <button onClick={this.props.reset}>reset</button>
        </div>
    }
}
export default Click;