import { Component } from "react";
import Hoc1 from "./Hoc1";

class Hover extends Component {
    render() {
        return <div>
            <h1>{this.props.count}</h1>
            <button onMouseOver={this.props.increament}>increament</button>
            <button onMouseOver={this.props.decreament}>decreament</button>
            <button onMouseOver={this.props.reset}>Reset</button>

        </div>
    }
}
export default Hoc1(Hover)