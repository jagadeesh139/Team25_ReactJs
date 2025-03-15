import { Component } from "react";

class Movietable extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>seatNumber</th>
                        <th>isBooked</th>
                        <th>category</th>
                        <th>userID</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movie.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.seatNumber}</td>
                            <td>{val.isBooked}</td>
                            <td>{val.category}</td>
                            <td>{val.userID}</td>
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
export default Movietable;