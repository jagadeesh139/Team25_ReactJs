import { Component } from "react";

class Crud2 extends Component {
    constructor() {
        super()

        this.state = {
            person: {
                fname: "",
                lname: "",
                email: ""
            },
            user: [],
            editindex: null
        }

    }
    handelevent = (e) => {
        const newperson = { ...this.state.person }
        newperson[e.target.name] = e.target.value
        this.setState({ person: newperson })
    }

    adduser = () => {
        const newuser = [...this.state.user]
        newuser.push(this.state.person)
        this.setState({ user: newuser })
        this.clearform()
    }



    handledelete = (i) => {
        const newuser = [...this.state.user]
        newuser.splice(i, 1)
        this.setState({ user: newuser })
    }
    handleedit = (val, i) => {
        { this.setState({ person: val, editindex: i }) }

    }
    handleupdate = () => {
        const newuser = [...this.state.user]
        newuser[this.state.editindex] = this.state.person
        this.setState({ user: newuser, editindex: null })
        this.clearform()
    }
    clearform() {
        { this.setState({ person: { fname: "", lname: "", email: "" } }) }
    }
    render() {
        return <div>
            <form action=""> <label htmlFor="">firstname</label>
                <input type="text" name="fname" id="" value={this.state.person.fname} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">last Name</label>
                <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" value={this.state.person.email} onChange={this.handelevent} />{""}

                {this.state.editindex === null ? (<button type="button" onClick={this.adduser}>Adduser</button>) : (<button type="button" onClick={this.handleupdate}>Update</button>
                )}</form>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.user.map((val, i) => {
                        return (<tr key={i}>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td>{val.email}</td>
                            <td><button type="button" onClick={() => { this.handleedit(val, i) }}>edit</button></td>
                            <td><button type="button" onClick={() => { this.handledelete(i) }}>delete</button></td>
                        </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    }
}
export default Crud2;