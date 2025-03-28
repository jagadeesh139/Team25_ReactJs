import { Component } from "react";
import { UserContextProvider } from "./ContextDemo";
import Mainapi from "./Mainapi";

class ContextAPi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "hi welcome to context api...",
            from: "i am from Context Api"
        }
    }
    render() {
        return <div>
            <UserContextProvider value={this.state.from}>
                <Mainapi message={this.state.message} />
            </UserContextProvider>



        </div>

    }
}
export default ContextAPi;