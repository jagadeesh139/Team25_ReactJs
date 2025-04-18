import { Component } from "react";
import { connect } from "redux"

class Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Empdetails: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            },
            editindex: null
        }
    }
    render() {
        return
        
    }
}
function mapsStatetoProps(state) {
    return state
}
export default connect(mapsStatetoProps)(Employee)