import React, { Component } from "react";

const Hoc1 = (Click) => {
    class newComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        increament = () => {
             this.setState({ count: this.state.count + 1 }) 
        }
        decreament = () => {
             this.setState({ count: this.state.count - 1 }) 
        }
        reset = () => {
             this.setState({ count: 0 }) 
        }

        render() {
            return (<Click count={this.state.count}
                increament={this.increament}
                decreament={this.decreament}
                reset={this.reset} />)
        }
    }
    return newComponent;


}
export default Hoc1;