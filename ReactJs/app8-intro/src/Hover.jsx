import { Component } from "react";

class Hover extends Component {
    render() {
        return <div>
            <h2>{this.props.count}</h2>
            <button onMouseOver={this.props.handelincrement}>increament</button>
            <button onMouseOver={this.props.handeldecrement}>decrement</button>
            <button onMouseOver={this.props.handelreset}>reset</button>

        </div>
    }
}
export default Hover;