import { Component } from "react";

class Clickhandel extends Component {
    render() {
        return <div>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.handelincreament}>increament</button>
            <button onClick={this.props.handelDecreament}>Decreament</button>
            <button onClick={this.props.handelReset}>Reset</button>
        </div>

    }
}
export default Clickhandel;