import { Component } from "react";
import { UserContextComsumer, UserContextProvider } from "./ContextDemo";
import Childapi from "./Childapi";

class Mainapi extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <h1>welcome to main Component...!!!</h1>
            <UserContextComsumer>
                {(value) => {
                    return <h3>{value}</h3>

                }}
            </UserContextComsumer>


        </div>
    }
}
export default Mainapi;