import { Component } from "react";

class RenderProps extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            {this.props.switch}
            <button onMouseOver={this.props.SwitchOn}>ON</button>
            <button onMouseOver={this.props.SwitchOff}>OFF</button>

        </div>
    }
}
export default RenderProps;