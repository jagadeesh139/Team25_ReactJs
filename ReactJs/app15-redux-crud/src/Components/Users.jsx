import React, { Component } from "react";
import { connect } from "react-redux";
import { adduserAction, deleteuserAction, UpdateuserAction } from "../Store/actions";

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
        const newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })

    }
    handelAdduser = () => {
        this.props.dispatch(adduserAction(this.state.user))
        this.setState({
            user: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            }

        })

    }
    handeldelete = (user) => {
        this.props.dispatch(deleteuserAction(user))

    }
    handeledit = (user, i) => {
        this.setState({ user, editindex: i })

    }
    handelUpdate = (user) => {
        const data = {
            value: this.state.user,
            index: this.state.editindex
        }
        this.props.dispatch(UpdateuserAction(data))
        this.setState({
            user: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            }
        })

    }
    render() {
        console.log(this.props)
        return <div>
            <form action="">
                <label htmlFor="">First Name:</label>
                <input type="text" value={this.state.user.fname} name="fname" onChange={(e) => { this.handelchange(e) }} />{""}
                <br />
                <label htmlFor="">Last name:</label>
                <input type="text" value={this.state.user.lname} name="lname" onChange={(e) => { this.handelchange(e) }} />{""}
                <br />
                <label htmlFor="">Email:</label>
                <input type="text" value={this.state.user.email} name="email" onChange={(e) => { this.handelchange(e) }} />{""}
                <br />
                <label htmlFor="">password</label>
                <input type="text" value={this.state.user.password} name="password" onChange={(e) => { this.handelchange(e) }} />{""}
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
                    {this.props.user.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button type="button" onClick={() => { this.handeledit(user, i) }} style={{ background: "gray", color: "white" }}>Edit</button></td>
                            <td><button type="button" onClick={() => { this.handeldelete(user) }} style={{ background: "red", color: "white" }}>Delete</button></td>
                        </tr>


                    })}
                </tbody>
            </table>

        </div>

    }
}
function mapsStateToProps(state) {
    return state

}
export default connect(mapsStateToProps)(Users)