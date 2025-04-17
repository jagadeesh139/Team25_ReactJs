import { Component } from "react";
import { connect } from "react-redux";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: "",       // single input string
      editindex: null    // index of the student being edited
    };
  }

  handleChange = (e) => {
    this.setState({ student: e.target.value });
  };

  handleAdd = () => {
    console.log("add user")
    this.props.dispatch({
      type: "CREATE",
      payload: this.state.student
    });
    this.setState({ student: "" });
  };

  handleEdit = (student, i) => {
    this.setState({ student, editindex: i });
  };

  handleUpdate = () => {
    console.log("update user")
    this.props.dispatch({
      type: "UPDATE",
      payload: {
        index: this.state.editindex,
        value: this.state.student
      }
    });
    this.setState({ student: "", editindex: null });
  };

  handleDelete = (i) => {
    console.log(i)
    this.props.dispatch({
      type: "DELETE",
      payload:i
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.student}
          onChange={this.handleChange}
        />
        {this.state.editindex === null ? (
          <button onClick={this.handleAdd}>Add User</button>
        ) : (
          <button onClick={this.handleUpdate}>Update</button>
        )}

        <ul>
          {this.props.student &&
            this.props.student.map((student, i) => (
              <li key={i}>
                {student}
                <button onClick={() => this.handleEdit(student, i)}>Edit</button>
                <button onClick={() => this.handleDelete(i)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    student: state.student // assuming `state.student` is an array
  };
}

export default connect(mapStateToProps)(Student);
