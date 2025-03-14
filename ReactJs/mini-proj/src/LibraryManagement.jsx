import axios from "axios";
import { Component } from "react";

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
                <form>
                    <label>Id</label>
                    <input type="text" name="id" value={this.state.library.id} onChange={this.handleEvent} />
                    <br />
                    <label>title</label>
                    <input type="text" name="title" value={this.state.library.title} onChange={this.handleEvent} />
                    <br />
                    <label>author</label>
                    <input type="text" name="author" value={this.state.library.author} onChange={this.handleEvent} />
                    <br />
                    <label>isAvailable</label>
                    <input type="text" name="isAvailable" value={this.state.library.isAvailable} onChange={this.handleEvent} />
                    <br />
                    <label>borrower</label>
                    <input type="text" name="borrower" value={this.state.library.borrower} onChange={this.handleEvent} />
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
                            <th>Title</th>
                            <th>Author</th>
                            <th>Isavailable</th>
                            <th>borrower</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Book.map((val, i) => {
                            return <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.author}</td>
                                <td>{val.isAvailable}</td>
                                <td>{val.borrower}</td>
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

export default LibraryManagement;
