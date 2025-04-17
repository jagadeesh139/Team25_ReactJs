import { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            },
            editindex: null
        }
    }
    render() {
        return <form action="">
            <label htmlFor="">First Name:</label>
            <input type="text" value={this.state.user.fname} name="fname" onChange={(e) => { this.handelchange(e) }} />
            <label htmlFor="">Last name:</label>
            <input type="text" value={this.state.user.lnamename} name="lname" onChange={(e) => { this.handelchange(e) }} />
            <label htmlFor="">Email:</label>
            <input type="text" value={this.state.user.email} name="email" onChange={(e) => { this.handelchange(e) }} />
            <label htmlFor="">password</label>
            <input type="text" value={this.state.user.password} name="pasword" onChange={(e) => { this.handelchange(e) }} />
        </form>
    }
}
function mapstatetoprop(state) {
    return state

}
export default connect(mapstatetoprop)(Users)