import Click1 from "./Click1";
import Count1 from "./Count1";
import Hover1 from "./Hover1";
import { Component } from "react";

// const { Component } = require("react");

class Props1 extends Component {
    render() {
        return <div>
            <h3>welcome to render props ...!!</h3>
            <Count1 render={(count, handelincrement, handeldecrement, handelReset) => (<Click1 count={count} handelincrement={handelincrement} handeldecrement={handeldecrement} handelReset={handelReset} />)} />
            <Count1 render={(count, handelincrement, handeldecrement, handelReset) => (<Hover1 count={count} handelincrement={handelincrement} handeldecrement={handeldecrement} handelReset={handelReset} />)} />

        </div>
    }
}
export default Props1;