import { Component } from "react";
import { UserContextComsumer } from "./CTapidemo";

class UserComponent extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <h3>welcome to User Component ...!</h3>
            <UserContextComsumer >
                {(value) => {
                    return <h2>{value}</h2>

                }}

            </UserContextComsumer>
            <h2> msgfrommain:{this.props.msg}</h2>


        </div>
    }
}
export default UserComponent; 