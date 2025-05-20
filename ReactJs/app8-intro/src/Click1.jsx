import { Component } from "react";

class Click1 extends Component {
    render() {
        return <div>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.handelincrement}>Increment</button>
            <button onClick={this.props.handeldecrement}>Decrement</button>
            <button onClick={this.props.handelReset}>Reset</button>
        </div>
    }
}
export default Click1; 