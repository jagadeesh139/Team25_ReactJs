import { Component } from "react";
import LifehookB from "./LifehookB";

class LifehookA extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("LifehookA getDerivedStateFromProps !!!");
        return null;
    }



    constructor(props) {
        super()
        this.state = {
            count: 0,
        }

        console.log("constructor of Component A..... !!")
        // console.log("component state derived...!!!")
    }

    changecount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log("render of Component A ...!!!")
        return <div>

            <h1>welcome to life cycle hooks</h1>
            {/* <h2>{this.state.count}</h2> */}
            <button onClick={this.changecount}>Change count</button>
            <br />
            {/* console.log("component did mount !!"); */}
            <LifehookB changevalue={this.state.count} />

        </div>
    }

    componentDidMount() {
        console.log("yes component did mount !!!!")
    }


}
export default LifehookA;