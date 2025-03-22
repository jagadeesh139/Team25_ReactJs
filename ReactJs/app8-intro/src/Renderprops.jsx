import { Component } from "react"
import Handelcount from "./Handelcount";
import HandelClick from "./HandelClick";
import Handelhover from "./Handelhover";

class Renderprops extends Component {
    render() {
        return <div>
            <h2>welcome to render props ...!!</h2>
            <div>
                <Handelcount render={(count, handelIncreament, handelDecreament, handelReset) => (
                    <HandelClick count={count} handelIncreament={handelIncreament} handelDecreament={handelDecreament} handelReset={handelReset} />

                )} />

                <Handelcount render={(count, handelIncreament, handelDecreament, handelReset) => (
                    <Handelhover  count={count} handelIncreament={handelIncreament} handelDecreament={handelDecreament} handelReset={handelReset} />


                )} />

            </div>
        </div>
    }
}
export default Renderprops;