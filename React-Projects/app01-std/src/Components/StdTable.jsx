import { Component } from "react";
import "./StdTable.css"

class StdTable extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <table class="table" border={1}>
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Course</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Batch</th>
                        <th scope="col">EDIt</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.register.map((std, i) => {
                        return <tr key={i}>
                            <td>{std.name}</td>
                            <td>{std.gender}</td>
                            <td>{std.email}</td>
                            <td>{std.course}</td>
                            <td>{std.contact}</td>
                            <td>{std.batch}</td>
                            <td><button type="button" onClick={() => { this.props.handeledit(std, i) }}>Edit</button></td>
                            <td><button type="button" onClick={() => { this.props.handeldelete(i) }}>Delete</button></td>
                        </tr>
                    })}



                </tbody>
            </table>
        </div>
    }
}
export default StdTable;