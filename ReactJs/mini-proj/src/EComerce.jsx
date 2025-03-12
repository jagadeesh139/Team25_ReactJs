import { Component } from "react";
import axios from "axios";

class EComerce extends Component {
    constructor() {
        super();
        this.state = {
            comerce: {
                id: "",
                name: "",
                price: "",
                quantity: "",
                totalprice: ""
            },
            total: [],
            editindex: null,
        };
    }

    componentDidMount() {
        this.getdatafromserver();
    }

    getdatafromserver = () => {
        axios.get("http://localhost:3000/total").then(({ data }) => {
            this.setState({ total: data });
        });
    };

    handelevent = (e) => {
        const newcomerce = { ...this.state.comerce };
        newcomerce[e.target.name] = e.target.value;
        this.setState({ comerce: newcomerce });
    };

    adduser = () => {
        axios.post("http://localhost:3000/total", this.state.comerce).then(() => {
            this.getdatafromserver();
            this.clearform();
        });
    };

    handeledit = (val, i) => {
        this.setState({ comerce: val, editindex: i });
    };

    handelupdate = () => {
        axios.put(`http://localhost:3000/total/${this.state.comerce.id}`, this.state.comerce)
            .then(() => {
                this.getdatafromserver();
                this.setState({ editindex: null });
                this.clearform();
            });
    };

    handeldelete = (val) => {
        axios.delete(`http://localhost:3000/total/${val.id}`).then(() => {
            this.getdatafromserver();
        });
    };

    clearform = () => {
        this.setState({
            comerce: {
                id: "",
                name: "",
                price: "",
                quantity: "",
                totalprice: "",
            },
            editindex: null,
        });
    };

    render() {
        return (
            <div>
                <form>
                    <label>Id:</label>
                    <input type="text" name="id" value={this.state.comerce.id} onChange={this.handelevent} />
                    <br />
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.comerce.name} onChange={this.handelevent} />
                    <br />
                    <label>Price:</label>
                    <input type="text" name="price" value={this.state.comerce.price} onChange={this.handelevent} />
                    <br />
                    <label>Quantity:</label>
                    <input type="text" name="quantity" value={this.state.comerce.quantity} onChange={this.handelevent} />
                    <br />
                    <label>Total Price:</label>
                    <input type="text" name="totalprice" value={this.state.comerce.totalprice} onChange={this.handelevent} />
                    <br />

                    {this.state.editindex === null ? (
                        <button type="button" onClick={this.adduser}>Add User</button>
                    ) : (
                        <button type="button" onClick={this.handelupdate}>Update</button>
                    )}
                </form>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.total.map((val, i) => (
                            <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.quantity}</td>
                                <td>{val.totalprice}</td>
                                <td>
                                    <button type="button" onClick={() => this.handeledit(val, i)}>Edit</button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => this.handeldelete(val)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EComerce;
