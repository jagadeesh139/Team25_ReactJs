import { Component } from "react";
import axios from "axios";

class Server extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: "",
                id: "",
            },
            user: [],
            editindex: null,
        };
    }

    componentDidMount() {
        this.getUserFromServer();
    }

    getUserFromServer = () => {
        axios.get("http://localhost:3000/user")
            .then((response) => {
                console.log("Fetched Users:", response.data); // ✅ Debugging
                if (Array.isArray(response.data)) {
                    this.setState({ user: response.data });
                } else {
                    console.error("Invalid API response format");
                }
            })
            .catch((error) => console.error("Error fetching users:", error));
    };

    handleEvent = (e) => {
        this.setState({
            person: { ...this.state.person, [e.target.name]: e.target.value },
        });
    };

    addUser = () => {
        axios.post("http://localhost:3000/user", this.state.person)
            .then(() => {
                this.getUserFromServer();
                this.clearUser();
            })
            .catch((error) => console.error("Error adding user:", error));
    };

    handleDelete = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
            .then(() => {
                this.getUserFromServer();
            })
            .catch((error) => console.error("Error deleting user:", error));
    };

    handleEdit = (value, index) => {
        this.setState({ person: { ...value }, editindex: index });
    };

    handleUpdate = () => {
        const { person } = this.state;
        axios.put(`http://localhost:3000/user/${person.id}`, person)
            .then(() => {
                this.getUserFromServer();
                this.setState({ editindex: null });
                this.clearUser();
            })
            .catch((error) => console.error("Error updating user:", error));
    };

    clearUser = () => {
        this.setState({
            person: { fname: "", lname: "", email: "", id: "" },
        });
    };

    render() {
        return (
            <div>
                <h2>User Management</h2>
                <form>
                    <label>First Name</label>
                    <input type="text" name="fname" value={this.state.person.fname} onChange={this.handleEvent} />
                    <br />
                    <label>Last Name</label>
                    <input type="text" name="lname" value={this.state.person.lname} onChange={this.handleEvent} />
                    <br />
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.person.email} onChange={this.handleEvent} />
                    <br />
                    <label>ID</label>
                    <input type="text" name="id" value={this.state.person.id} onChange={this.handleEvent} />
                    <br />
                    
                    {this.state.editindex === null ? (
                        <button type="button" onClick={this.addUser}>Add User</button>
                    ) : (
                        <button type="button" onClick={this.handleUpdate}>Update</button>
                    )}
                </form>


                <h3>User List</h3>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.length > 0 ? (
                            this.state.user.map((value, i) => (
                                <tr key={i}>
                                    <td>{value.fname}</td>
                                    <td>{value.lname}</td>
                                    <td>{value.email}</td>
                                    <td>{value.id}</td>
                                    <td>
                                        <button type="button" onClick={() => this.handleEdit(value, i)}>Edit</button>
                                        <button type="button" onClick={() => this.handleDelete(value.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Server;
