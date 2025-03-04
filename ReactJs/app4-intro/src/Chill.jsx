import { Component } from "react";

class Chill extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <ul>{this.props.all.email}</ul>
        </div>
    }
}
export default Chill;