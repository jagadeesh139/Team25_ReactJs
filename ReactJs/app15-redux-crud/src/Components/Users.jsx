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
    handelchange = (e) => {
        const newUser = [...this.state.user]
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })

    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">First Name:</label>
                <input type="text" value={this.state.user.fname} name="fname" onChange={(e) => { this.handelchange(e) }} />{""}
                <br />
                <label htmlFor="">Last name:</label>
                <input type="text" value={this.state.user.lnamename} name="lname" onChange={(e) => { this.handelchange(e) }} />{""}
                <br />
                <label htmlFor="">Email:</label>
                <input type="text" value={this.state.user.email} name="email" onChange={(e) => { this.handelchange(e) }} />{""}
                <br />
                <label htmlFor="">password</label>
                <input type="text" value={this.state.user.password} name="pasword" onChange={(e) => { this.handelchange(e) }} />{""}
                <br />
                {this.state.editindex === null ? (<button type="button" onClick={this.handelAdduser} style={{ background: "blue", color: "white" }}>AddUser</button>) : (<button type="button" onClick={this.handelUpdate} style={{ background: "orange", color: "white" }}> Update</button>)}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Last Name</th>
                        <th> Email</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users && this.props.users.map((user, editindex) => {
                        return <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button type="button" onClick={this.handeledit} style={{ background: "gray", color: "white" }}>Edit</button></td>
                            <td><button type="button" onClick={this.handeldelete} style={{ background: "red", color: "white" }}>Edit</button></td>
                        </tr>


                    })}
                </tbody>
            </table>

        </div>







    }
}
function mapstatetoprop(state) {
    return state

}
export default connect(mapstatetoprop)(Users)