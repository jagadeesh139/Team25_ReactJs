import axios from "axios";
import { Component } from "react";

class Usermanagement extends Component {
    constructor() {
        super();
        this.state = {
            profile: {
                id: "",
                name: "",
                email: "",
                role: "",
                preferences: ""
            },
            user: [],
            index: null
        };
    }

    componentDidMount() {
        this.getDataFromServer();
    }

    handleEvent = (e) => {
        const newprofile = { ...this.state.profile }
        newprofile[e.target.name] = e.target.value
        this.setState({ profile: newprofile })
    };

    addData = () => {
        axios.post("http://localhost:3000/user", this.state.profile).then(() => {
            this.getDataFromServer();
            this.clearForm();
        });
    };

    getDataFromServer = () => {
        axios.get("http://localhost:3000/user").then(({ data }) => {
            this.setState({ user: data });
        });
    };

    handleEdit = (val, i) => {
        this.setState({ profile: val, index: i });
    };

    handleDelete = (val, i) => {
        axios.delete("http://localhost:3000/user/" + val.id).then(() => {
            this.getDataFromServer();
        });
    };

    handleUpdate = () => {
        axios.put("http://localhost:3000/user/" + this.state.user[this.state.index].id, this.state.profile).then(() => {
            this.getDataFromServer();
            this.setState({ index: null });
            this.clearForm();
        });
    };

    clearForm = () => {
        this.setState({
            profile: {
                id: "",
                name: "",
                email: "",
                role: "",
                preferences: ""
            }
        });
    };

    render() {
        return (
            <div>
                <form>
                    <label>Id</label>
                    <input type="text" name="id" value={this.state.profile.id} onChange={this.handleEvent} />
                    <br />
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.profile.name} onChange={this.handleEvent} />
                    <br />
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.profile.email} onChange={this.handleEvent} />
                    <br />
                    <label>role</label>
                    <input type="text" name="role" value={this.state.profile.role} onChange={this.handleEvent} />
                    <br />
                    <label>preferences</label>
                    <input type="text" name="preferences" value={this.state.profile.preferences} onChange={this.handleEvent} />
                    <br />
                    {this.state.index === null ? (
                        <button type="button" onClick={this.addData}>AddUser</button>
                    ) : (
                        <button type="button" onClick={this.handleUpdate}>Update</button>
                    )}
                </form>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>role</th>
                            <th>Preferences</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.map((val, i) => {
                            return <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.role}</td>
                                <td>{val.preferences}</td>
                                <td>
                                    <button type="button" onClick={() => this.handleEdit(val, i)}>Edit</button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => this.handleDelete(val, i)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Usermanagement;
