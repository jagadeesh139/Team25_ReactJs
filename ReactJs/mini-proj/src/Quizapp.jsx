import axios from "axios";
import { Component } from "react";

class Quizapp extends Component {
    constructor() {
        super();
        this.state = {
            app: {
                id: "",
                question: "",
                options: "",
                correctAnswer: "",
                score: ""
            },
            quiz: [],
            index: null
        };
    }

    componentDidMount() {
        this.getDataFromServer();
    }

    handleEvent = (e) => {
        this.setState({
            app: {
                ...this.state.app,
                [e.target.name]: e.target.value
            }
        });
    };

    addData = () => {
        axios.post("http://localhost:3000/quiz", this.state.app).then(() => {
            this.getDataFromServer();
            this.clearForm();
        });
    };

    getDataFromServer = () => {
        axios.get("http://localhost:3000/quiz").then(({ data }) => {
            this.setState({ quiz: data });
        });
    };

    handleEdit = (val, i) => {
        this.setState({ app: val, index: i });
    };

    handleDelete = (id) => {
        axios.delete(`http://localhost:3000/quiz/${id}`).then(() => {
            this.getDataFromServer();
        });
    };

    handleUpdate = () => {
        axios.put(`http://localhost:3000/quiz/${this.state.app.id}`, this.state.app).then(() => {
            this.getDataFromServer();
            this.setState({ index: null });
            this.clearForm();
        });
    };

    clearForm = () => {
        this.setState({
            app: {
                id: "",
                question: "",
                options: "",
                correctAnswer: "",
                score: ""
            }
        });
    };

    render() {
        return (
            <div>
                <form>
                    <label>Id</label>
                    <input type="text" name="id" value={this.state.app.id} onChange={this.handleEvent} />
                    <br />
                    <label>Question</label>
                    <input type="text" name="question" value={this.state.app.question} onChange={this.handleEvent} />
                    <br />
                    <label>Options</label>
                    <input type="text" name="options" value={this.state.app.options} onChange={this.handleEvent} />
                    <br />
                    <label>Correct Answer</label>
                    <input type="text" name="correctAnswer" value={this.state.app.correctAnswer} onChange={this.handleEvent} />
                    <br />
                    <label>Score</label>
                    <input type="text" name="score" value={this.state.app.score} onChange={this.handleEvent} />
                    <br />
                    {this.state.index === null ? (
                        <button type="button" onClick={this.addData}>Add Question</button>
                    ) : (
                        <button type="button" onClick={this.handleUpdate}>Update</button>
                    )}
                </form>
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
                        {this.state.quiz.map((val, i) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.question}</td>
                                <td>{val.options}</td>
                                <td>{val.correctAnswer}</td>
                                <td>{val.score}</td>
                                <td>
                                    <button type="button" onClick={() => this.handleEdit(val, i)}>Edit</button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => this.handleDelete(val.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Quizapp;
