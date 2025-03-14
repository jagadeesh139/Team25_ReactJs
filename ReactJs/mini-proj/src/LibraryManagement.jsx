import axios from "axios";
import { Component } from "react";
import LibraryForm from "./LibraryForm";
import LibraryTable from "./LibraryTable";

class LibraryManagement extends Component {
    constructor() {
        super();
        this.state = {
            library: {
                id: "",
                title: "",
                author: "",
                isAvailable: "",
                borrower: ""
            },
            Book: [],
            index: null
        };
    }

    componentDidMount() {
        this.getDataFromServer();
    }

    handleEvent = (e) => {
        const newlibrary = { ...this.state.library }
        newlibrary[e.target.name] = e.target.value
        this.setState({ library: newlibrary })
    };

    addData = () => {
        axios.post("http://localhost:3000/Book", this.state.library).then(() => {
            this.getDataFromServer();
            this.clearForm();
        });
    };

    getDataFromServer = () => {
        axios.get("http://localhost:3000/Book").then(({ data }) => {
            this.setState({ Book: data });
        });
    };

    handleEdit = (val, i) => {
        this.setState({ library: val, index: i });
    };

    handleDelete = (val, i) => {
        axios.delete("http://localhost:3000/Book/" + val.id).then(() => {
            this.getDataFromServer();
        });
    };

    handleUpdate = () => {
        axios.put("http://localhost:3000/Book/" + this.state.Book[this.state.index].id, this.state.library).then(() => {
            this.getDataFromServer();
            this.setState({ index: null });
            this.clearForm();
        });
    };

    clearForm = () => {
        this.setState({
            library: {
                id: "",
                title: "",
                author: "",
                isAvailable: "",
                borrower: ""
            }
        });
    };

    render() {
        return (
            <div>
                <LibraryForm library={this.state.library}
                    index={this.state.index}
                    handleEvent={this.handleEvent}
                    addData={this.addData}
                    handleUpdate={this.handleUpdate} />
                <LibraryTable Book={this.state.Book}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete} />


            </div>
        );
    }
}

export default LibraryManagement;
