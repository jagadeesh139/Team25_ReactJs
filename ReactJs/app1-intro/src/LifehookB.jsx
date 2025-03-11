import { Component } from "react";

class LifehookB extends Component {
    constructor(props) {
        super()
        this.state = {}
        console.log("lifehooKB constructer  called...!")

    }

    static getderivedfromprops = () => {
        console.log("lifehookb Component from props...!!")
        return {}
    }

    shouldComponentUpdate = () => {
        console.log("shouldcomponent Update...!")
        return true;

    }
    render() {
        console.log("render Called ..!!!")
        return <h2>{this.props.changevalue}</h2>

    }
    getSnapshotBeforeUpdate = () => {
        console.log("getsnapshot before Update....!")
    }

    componentDidUpdate=()=>{
        console.log("LifeCycleB componentDidUpdate Called !!!")
    }

}
export default LifehookB;