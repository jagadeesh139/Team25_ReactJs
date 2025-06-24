import { Component } from "react";
import Click from "./Click";

const Hoc = (Click) => {
    class newComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        handelincreament = () => {
            this.setState({ count: this.state.count + 1 })
        }
        handeldecreament = () => {
            this.setState({ count: this.state.count - 1 })

        }
        handelreset = () => {
            this.setState({ count: 0 })
        }
        render() {
            return <div>
                <Click count={this.state.count}
                    increament={this.increament}
                    decreament={this.decreament}
                    reset={this.reset} />

            </div>
        }
    }
    return newComponent;

}
export default Hoc;