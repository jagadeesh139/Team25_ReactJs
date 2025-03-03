import { Component } from "react";

class Jaggudetails extends Component{
    constructor(){
        super()
        
    }
    render(){
        console.log(this.props.Adetails)
        return <div>
            <h2>{this.props.}</h2>
        </div>
    }
}
export default Jaggudetails;