import { Component } from "react";
import ParentComponent from "./ParentComponent";

class MainComponent extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <ParentComponent />

        </div>
    }
}
export default MainComponent;