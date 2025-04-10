import { Component } from "react";
import ParentComponent from "./ParentComponent";
import { UserContextProvider } from "../CTapidemo";

class MainComponent extends Component {
    constructor() {
        super()
        this.state = {
            msg: "welcome to Context api topic "
        }
    }
    render() {
        return <div>
            <h2>welcome to main Component..!</h2>
            <UserContextProvider value={this.state.msg}>
                <ParentComponent msg={this.state.msg} />

            </UserContextProvider>


        </div>
    }
}
export default MainComponent;