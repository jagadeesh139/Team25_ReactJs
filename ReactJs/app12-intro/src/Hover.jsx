import { Component } from "react";

class Hover extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <h1>{this.props.count}</h1>
            <button onMouseOver={this.props.increament}>increament</button>
            <button onMouseOver={this.props.decreament}>decreament</button>
            <button onMouseOver={this.props.reset}>reset</button>
        </div>

    }

}
export default Hover;