import { Component } from "react";

class ETtable extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.expense.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.amount}</td>
                            <td>{val.category}</td>
                            <td>{val.description}</td>
                            <td>{val.date}</td>
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
export default ETtable;