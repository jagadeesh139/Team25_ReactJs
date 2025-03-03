import { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    constructor(){
        super()

        this.state={
            fname:"kiran"
        }
        
    }
    render(){
        return <div>
            <Child all={this.state}/>
        </div>
    }
}
export default Parent;