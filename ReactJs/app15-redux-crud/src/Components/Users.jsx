import { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            editindex: null
        }
    }
}
function mapstatetoprop(state) {
    return state

}
export default connect(mapstatetoprop)(Users)