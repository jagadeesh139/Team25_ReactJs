import { Component } from "react";

class CrudApi extends Component {
    constructor() {
        super();
        this.state = {
            student: {
                fname: "",
                lname: "",
                email: ""
            },
            user: [],
            editindex: null
        };
    }

    handleevent = (e) => {
        const newstudent = { ...this.state.student };
        newstudent[e.target.name] = e.target.value;
        this.setState({ student: newstudent });
    };

    adduser = (e) => {
        e.preventDefault();
        const newuser = [...this.state.user];
        newuser.push(this.state.student);
        this.setState({ user: newuser });
        this.clearuser();
    };

    handleDelete = (i) => {
        const newuser = [...this.state.user];
        newuser.splice(i, 1);
        this.setState({ user: newuser });
    };

    handleEdit = (user, i) => {
        this.setState({ student: user, editindex: i });
    };

    handleupdate = (e) => {
        e.preventDefault();
        const newuser = [...this.state.user];
        newuser[this.state.editindex] = this.state.student;
        this.setState({ user: newuser, editindex: null });
        this.clearuser();
    };

    clearuser = () => {
        this.setState({ student: { fname: "", lname: "", email: "" } });
    };

    render() {
        return (
            <div>
                <form>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="fname"
                        value={this.state.student.fname}
                        onChange={this.handleevent}
                    />
                    <br />
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lname"
                        value={this.state.student.lname}
                        onChange={this.handleevent}
                    />
                    <br />
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.student.email}
                        onChange={this.handleevent}
                    />
                    <br />
                    {this.state.editindex !== null ? (
                        <button  type=" button"onClick={this.handleupdate}>Update User</button>
                    ) : (
                        <button type="button" onClick={this.adduser}>Add User</button>
                    )}
                </form>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.map((user, i) => (
                            <tr key={i}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(user, i)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => this.handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CrudApi;
