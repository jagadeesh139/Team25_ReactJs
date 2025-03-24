import { Component } from "react";
import Counthandel from "./Counthandel";
import Clickhandel from "./Clickhandel";
import Hoverhandel from "./Hoverhandel";

class Props extends Component {
    render() {
        return <div>
            <h1>
                welcome to render Props Topic...!!
            </h1>
            <Counthandel render={(count, handelincreament, handelDecreament, handelReset) => (<Clickhandel count={count} handelincreament={handelincreament} handelDecreament={handelDecreament} handelReset={handelReset} />)} />

            <hr />
            <Counthandel render={(count, handelincreament, handelDecreament, handelReset) => (<Hoverhandel count={count} handelincreament={handelincreament} handelDecreament={handelDecreament} handelReset={handelReset} />)} />
        </div>
    }
}
export default Props;