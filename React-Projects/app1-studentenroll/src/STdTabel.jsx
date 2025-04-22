import { Component } from "react";

class STdTabel extends Component {
    constructor() {
        super()

    }
    render() {
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Year</th>
                        <th>gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                </thead>
                <tbody>
                    {this.props.register.map((std, i) => {
                        return <tr>
                            <td>{std.name}</td>
                            <td>{std.email}</td>
                            <td>{std.course}</td>
                            <td>{year}</td>
                            <td>{gender}</td>
                            <td><button type="button" onClick={() => { handeledit(std, i) }}>edit</button></td>
                            <td><button type="button" onClick={() => { handeldelete(i) }}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    }

}
export default STdTabel;