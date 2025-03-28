import React,{ Component } from "react";
import Hoc from "./Hoc";

class Handelclick extends Component {
    render() {
        
        return <div>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.handelincreament}>increament</button>
            <button onClick={this.props.handeldecreament}>Decreament</button>
            <button onClick={this.props.handelreset}>Reset</button>
        </div>
    }
}
export default Hoc(Handelclick)