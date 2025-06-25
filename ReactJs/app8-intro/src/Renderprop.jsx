import { Component } from "react";
import Count from "./Count";
import Click from "./Click";
import Hover from "./Hover";

class Renderprop extends Component {
    render() {
        return <div> 
            <h2>
                welcome to render props ...!!
            </h2>
            <Count render={(count, handelincrement, handeldecrement, handelreset) => (
                <Click count={count} handelincrement={handelincrement} handeldecrement={handeldecrement} handelreset={handelreset} />
            )} />
            <Count render={(count, handelincrement, handeldecrement, handelreset) => (
                <Hover count={count} handelincrement={handelincrement} handeldecrement={handeldecrement} handelreset={handelreset} />
            )} />


        </div>
    }
}
export default Renderprop;