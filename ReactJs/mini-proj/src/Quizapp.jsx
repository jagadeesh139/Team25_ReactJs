import axios from "axios";
import { Component } from "react";
import Quizform from "./Quizform";
import Quiztable from "./Quiztable";

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

    handleDelete = (val, i) => {
        axios.delete(`http://localhost:3000/quiz/` + val.id).then(() => {
            this.getDataFromServer();
        });
    };

    handleUpdate = () => {
        axios.put(`http://localhost:3000/quiz/` + this.state.quiz[this.state.index].id, this.state.app).then(() => {
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
                <Quizform app={this.state.app}
                    handleEvent={this.handleEvent}
                    index={this.state.index}
                    addData={this.addData}
                    handleUpdate={this.handleUpdate} />


                <Quiztable quiz={this.state.quiz}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete} />


            </div>
        );
    }
}

export default Quizapp;
