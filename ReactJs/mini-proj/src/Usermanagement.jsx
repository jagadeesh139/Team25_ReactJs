import axios from "axios";
import { Component } from "react";
import UserTable from "./UserTable";
import UserForm from "./userForm";

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
                <UserForm profile={this.state.profile}
                    index={this.state.index}
                    addData={this.addData}
                    handleEvent={this.handleEvent}
                    handleUpdate={this.handleUpdate} />
                <hr />
                <UserTable user={this.state.user}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}/>


            </div>
        );
    }
}

export default Usermanagement;
