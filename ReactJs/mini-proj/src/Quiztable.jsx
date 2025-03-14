import { Component } from "react";

class Quiztable extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Question</th>
                        <th>Options</th>
                        <th>Correct Answer</th>
                        <th>Score</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.quiz.map((val, i) => (
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.question}</td>
                            <td>{val.options}</td>
                            <td>{val.correctAnswer}</td>
                            <td>{val.score}</td>
                            <td>
                                <button type="button" onClick={() => this.props.handleEdit(val, i)}>Edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={() => this.props.handleDelete(val.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    }
}
export default Quiztable;