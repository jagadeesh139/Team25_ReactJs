import { Component } from "react";

class Count1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handelincrement = () => {
        this.setState({ count: this.state.count + 1 })

    }
    handeldecrement = () => {
        this.setState({ count: this.state.count - 1 })

    }
    handelReset = () => {
        this.setState({ count: 0 })

    }
    render() {
        return <div>
            {this.props.render(this.state.count, this.handelincrement, this.handeldecrement, this.handelReset)}

        </div>
    }
}
export default Count1;