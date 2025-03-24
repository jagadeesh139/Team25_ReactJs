import { Component } from "react";
import Hoc from "./Hoc";

class Handelhover extends Component {
    render() {
        return <div>
            <h2>{this.props.count}</h2>
            <button onMouseOver={this.props.handelincreament}>increament</button>
            <button onMouseOver={this.props.handeldecreament}>Decreament</button>
            <button onMouseOver={this.props.handelreset}>Reset</button>
        </div>
    }
}
export default Hoc(Handelhover);