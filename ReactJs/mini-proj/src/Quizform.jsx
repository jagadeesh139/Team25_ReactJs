import { Component } from "react";

class Quizform extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
             <form>
                    <label>Id</label>
                    <input type="text" name="id" value={this.props.app.id} onChange={this.props.handleEvent} />
                    <br />
                    <label>Question</label>
                    <input type="text" name="question" value={this.props.app.question} onChange={this.props.handleEvent} />
                    <br />
                    <label>Options</label>
                    <input type="text" name="options" value={this.props.app.options} onChange={this.props.handleEvent} />
                    <br />
                    <label>Correct Answer</label>
                    <input type="text" name="correctAnswer" value={this.props.app.correctAnswer} onChange={this.props.handleEvent} />
                    <br />
                    <label>Score</label>
                    <input type="text" name="score" value={this.props.app.score} onChange={this.props.handleEvent} />
                    <br />
                    {this.props.index === null ? (
                        <button type="button" onClick={this.props.addData}>Add Question</button>
                    ) : (
                        <button type="button" onClick={this.props.handleUpdate}>Update</button>
                    )}
                </form>

        </div>

    }
}
export default Quizform;