import { Component } from "react";

class StdTable extends Component {
    render() {
        return (
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Year</th>
                            <th>Gender</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.register.map((std, i) => {
                            <tr key={i}>

                                <td>{std.name}</td>
                                <td>{std.email}</td>
                                <td>{std.course}</td>
                                <td>{std.year}</td>
                                <td>{std.gender}</td>
                                <td>
                                    <button type="button" onClick={() => this.props.handleEdit(std, i)}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => this.props.handleDelete(i)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StdTable;
