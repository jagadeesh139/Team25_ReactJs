import { Component } from "react";

class LibraryTable extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
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
                    {this.props.Book.map((val, i) => {
                        return <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.author}</td>
                            <td>{val.isAvailable}</td>
                            <td>{val.borrower}</td>
                            <td>
                                <button type="button" onClick={() => this.props.handleEdit(val, i)}>Edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={() => this.props.handleDelete(val, i)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>


            </table>

        </div>
    }
}
export default LibraryTable;