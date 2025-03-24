import React, { Component } from "react";

const Hoc = (Handelclick) => {
    class newComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count:1,
            }
        }
        handelincreament = () => {
             this.setState({ count: this.state.count + 5 })
             }
        
        handeldecreament = () => {
            this.setState({ count: this.state.count - 5 }) }

        
        handelreset = () => {
            this.setState({ count: 1 }) }


        

        render() {
            return (
            <Handelclick count={this.state.count}
                    handelincreament={this.handelincreament}
                    handeldecreament={this.handeldecreament}
                    handelreset={this.handelreset} />
                );

            
        }
    }
    return newComponent;

}  
export default Hoc;