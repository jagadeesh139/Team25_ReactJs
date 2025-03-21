import { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
        }
    }
    handelincrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handeldecrement = () => {
        this.setState({ count: this.state.count - 1 })

    }
    handelreset = () => {
        this.setState({ count: 1 })
    }
    render() {
        return <div>
            {this.props.render(this.state.count, this.handelincrement, this.handeldecrement, this.handelreset)}

        </div>
    }

}
export default Count;