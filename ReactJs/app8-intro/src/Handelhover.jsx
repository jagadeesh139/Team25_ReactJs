import { Component } from "react";

class Handelhover extends Component {
    render() {
        return <div>
            <h2>{this.props.count}</h2>
            <button onMouseOver={this.props.handelIncreament}>Increament</button>
            <button onMouseOver={this.props.handelDecreament}>Decreament</button>
            <button onMouseOver={this.props.handelReset}>Reset</button>
        </div>
    }
}
export default Handelhover;