import  { Component } from "react";
import Hoc1 from "./Hoc1";

class Click extends Component {
    render() {
        return <div>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.increament}>increament</button>
            <button onClick={this.props.decreament}>decreament</button>
            <button onClick={this.props.reset}>Reset</button>

        </div>
    }
}
export default Hoc1(Click)