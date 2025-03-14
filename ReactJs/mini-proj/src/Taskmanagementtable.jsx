import { Component } from "react";

class Taskmanagementtable extends Component {
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
                        <th>Description</th>
                        <th>status</th>
                        <th>createdAt</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.task.map((val, i) => {
                        return <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>{val.status}</td>
                            <td>{val.createdAt}</td>
                            <td><button type="button" onClick={() => {
                                this.props.handeledit(val, i)
                            }}>edit</button></td>
                            <td ><button type="button" onClick={() => { this.props.handeldelete(i) }}>delete</button></td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>

    }
}
export default Taskmanagementtable;