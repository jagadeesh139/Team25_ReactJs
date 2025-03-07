import { Component } from "react";

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: ""
            },
            user: [{ fname: "ram", lname: "raju", email: "ramraju@gmail.com" }, { fname: "kiran", lname: "kumar", email: "kirankumar@gmail.com" }, { fname: "kalyan", lname: "kumar", email: "klayankumar@gmail.com" }],
            editIndex: null,
        }
    }
    handlevent = (event) => {
        console.log(event.target.name)
        const newperson = { ...this.state.person }
        newperson[event.target.name] = event.target.value
        this.setState({ person: newperson })
    }
    updatedata = () => {
        const newUser = [...this.state.user]
        newUser.push(this.state.person)
        this.setState({ user: newUser })
        console.log(this.state.person)
    }


    render() {
        return <div>
            <form action="">
                <label htmlFor="">Firstname :</label>
                <input type="text" name="fname" id="" value={this.state.person.fname} onChange={this.handlevent} />{""}
                <br />
                <label htmlFor="">LastName :</label>
                <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.handlevent} />{""}
                <br />
                <label htmlFor="">Email :</label>
                <input type="text" name="email" id="" value={this.state.person.email} onChange={this.handlevent} />{""}
                <br />

                <button onClick={this.updatedata}>updateData</button>
            </form>
            <hr />

            <table border={1}>
                <thead>
                    <tr>

                        <th>First name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.user.map(function (user, i) {
                        return <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td><button onClick={this.handleedit}>Edit</button></td>
                            <td><button onClick={this.handledelete}>Delete</button></td>
                        </tr>
                    })}


                </tbody>
            </table>
            {this.state.user.map(function (value) {
                return <ul>
                    <li>{value.fname}</li>
                    <li>{value.lname}</li>
                    <li>{value.email}</li>
                </ul>
            })}
        </div>

    }
}
export default Forms;