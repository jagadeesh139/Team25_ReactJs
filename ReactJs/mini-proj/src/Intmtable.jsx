import { Component } from "react";

class Intmtable extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.system.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
                            <td>{val.category}</td>
                            <td>
                                <button type="button" onClick={() => this.props.handeledit(val, i)}>Edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={() => this.props.handeldelete(val, i)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    }

}
export default Intmtable;