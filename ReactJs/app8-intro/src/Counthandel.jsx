import { Component } from "react";

class Counthandel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
        }
    }
    handelincreament = () => {
        { this.setState({ count: this.state.count + 2 }) }
    }
    handelDecreament = () => {
        { this.setState({ count: this.state.count - 1 }) }
    }
    handelReset = () => {
        { this.setState({ count: 1 }) }
    }

    render() {
        return <div>
            <h1>
                welcome to Count!!!
            </h1>
            {this.props.render(this.state.count, this.handelincreament, this.handelDecreament, this.handelReset)}


        </div>
    }
}
export default Counthandel;