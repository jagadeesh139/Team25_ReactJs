import { Component } from "react";

class Click extends Component {
    render() {
        return <div>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.handelincrement}>increament</button>
            <button onClick={this.props.handeldecrement}>decrement</button>
            <button onClick={this.props.handelreset}>reset</button>
        </div>
    } 
}
export default Click;