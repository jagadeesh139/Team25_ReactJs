import { Component } from "react"
import axios from "axios"

class EComerce extends Component {
    constructor() {
        super()
        this.state = {
            comerce: {
                id: "",
                name: "",
                price: "",
                quantity: "",
                totalprice: ""
            },
            total: [],
            editindex: null

        }

    }

    getdatafromserver = () => {
        axios.get("http://localhost:3000/total").then(({ data }) => {
            this.setState({ total: data })

        })
    }


    componentDidMount() {
        this.getdatafromserver();
    }


    handelevent = (e) => {
        const newcomerce = { ...this.state.comerce }
        newcomerce[e.target.name] = e.target.value;
        this.setState({ comerce: newcomerce })

    }
    adduser = () => {
        const newtotal = [...this.state.total]
        newtotal.push(this.state.comerce)
        this.setState({ total: newtotal })
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">Id:</label>
                <input type="text" id="" name="id" value={this.state.comerce.id} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Name:</label>
                <input type="text" id="" name="name" value={this.state.comerce.name} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">price:</label>
                <input type="text" id="" name="price" value={this.state.comerce.price} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">quantity:</label>
                <input type="text" id="" name="quantity" value={this.state.comerce.quantity} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">totalprice:</label>
                <input type="text" id="" name="totalprice" value={this.state.comerce.totalprice} onChange={this.handelevent} />{""}
                <br />

                {this.state.editindex === null ? (<button type="button" onClick={() => { this.adduser }}>adduser</button>) : (<button type="button" onClick={this.handelupdate}>delete</button>)}

            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Totalprice</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.total.map((val, i) => {
                        return <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.quantity}</td>
                            <td>{val.totalprice}</td>
                            <td><button type="button" onClick={() => { this.handeledit(val, i) }}>Edit</button></td>
                            <td><button type="button" onClick={() => {
                                this.handeldelete(i)

                            }}>delete</button></td>
                        </tr>

                    })}
                </tbody>
            </table>



        </div>

    }

}
export default EComerce;