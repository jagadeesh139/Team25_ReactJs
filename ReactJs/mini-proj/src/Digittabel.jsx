import { Component } from "react";

class Digittabel extends Component {
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
                        <th>Email</th>
                        <th>Phone</th>
                        <th>address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.digit.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.phone}</td>
                            <td>{val.address}</td>
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
export default Digittabel;