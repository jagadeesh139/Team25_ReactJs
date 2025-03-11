import { Component } from "react";

class LifehookB extends Component{
    constructor(props){
        super()
        this.state={}
        console.log("lifehooKB constructer  called...!")

    }

    static getderivedfromprops=()=>{
        console.log("lifehookb Component from props...!!")
    }
    render(){
        return
    }

}
export default LifehookB;