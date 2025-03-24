import { Component } from "react";

class Hover1 extends Component {
    render() {
        return <div>
            <h1>{this.props.count}</h1>
            <button onMouseOver={this.props.handelincrement}>Increment</button>
            <button onMouseOver={this.props.handeldecrement}>Decrement</button>
            <button onMouseOver={this.props.handelReset}>Reset</button>
        </div>
    }
}
export default Hover1;