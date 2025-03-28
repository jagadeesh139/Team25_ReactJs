import { Component } from "react";
import Mainapi from "./Mainapi";

class Childapi extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <h2>welcome to child component...</h2>
            <Mainapi message={this.props.message} />
        </div>
    }
}
export default Childapi;
