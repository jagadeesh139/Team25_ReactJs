import { Component } from "react";
import { connect } from "react-redux"

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userdetails: ["kirankumar", "raviraju", "uma"]
        }
    }
    render() {
        return <div>
            <ul>
                {this.state.Users.map((usr) => {
                    return <li>
                        {usr}
                    </li>

                })}
            </ul>
        </div>
    }
}
function mapstatetoprop(state) {
    return state

}
export default connect(mapstatetoprop)(Users);