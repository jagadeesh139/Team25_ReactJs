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
    handelevent = (e) => {
        const newEmpdetails = { ...this.state.Empdetails }
        newEmpdetails[e.target.name] = e.target.value
        this.setState({ Empdetails: newEmpdetails })

    }
    handelAdduser = () => {

    }

    handeldelete = () => {

    }
    handeledit = () => {

    }
    handelUpdate = () => {

    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">First Name:-</label>
                <input type="text" value={this.state.Empdetails.fname} name="fname" onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Last Name:-</label>
                <input type="text" value={this.state.Empdetails.lname} name="lname" onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Email:-</label>
                <input type="text" value={this.state.Empdetails.email} name="email" onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Password:-</label>
                <input type="text" value={this.state.password} name="password" onChange={this.handelevent} />{""}
                <br />
                {this.state.editindex === null ? (<button type="button" onClick={this.handelAdduser}>Adddetails</button>) : (<button type="button" onClick={this.handelUpdate}>Update</button>)}
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>PassWord</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Empdetails && this.state.Empdetails.map((emp, i) => {
                        return <tr>
                            <td>{emp.fname}</td>
                            <td>{emp.lname}</td>
                            <td>{emp.email}</td>
                            <td>{emp.password}</td>
                            <td><button type="button" onClick={() => { this.handeledit(emp, i) }}>Edit</button></td>
                            <td><button type="button" onClick={() => { this.handeldelete(emp) }}>Delete</button></td>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>

    }
}
function mapsStatetoProps(state) {
    return state
}
export default connect(mapsStatetoProps)(Employee)