import { Component } from "react";

class Handelcount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 2,
        };
    }
    handelIncreament = () => {
        this.setState({ count: this.state.count + 2 })
    }
    handelDecreament = () => {
        this.setState({ count: this.state.count - 1 })
    }
    handelReset = () => {
        this.setState({ count: 2 })
    }
    render() {
        return <div>
            {this.props.render(this.state.count,this.handelIncreament, this.handelDecreament, this.handelReset)}

        </div>
    }
}
export default Handelcount;