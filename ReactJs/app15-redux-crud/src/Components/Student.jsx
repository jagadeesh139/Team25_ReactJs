import { Component } from "react";
import { connect } from "react-redux"

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: "",
            editindex: null
        }
    }
    handelchange = (e) => {
        this.setState({ student: e.target.value })
    }
    handeladd = () => {
        this.props.dispatch({
            type: "CREATE",
            payload: this.state.student
        })
        this.setState({ student: "" })

    }
    handeledit = (student, i) => {
        this.setState({ student, editindex: i })

    }
    handelUpdate = () => {
        this.props.dispatch({
            type: "Update",
            payload: {
                index: this.state.editindex,
                value: this.state.student
            }

        })

    }

    render() {
        return <div>
            {/* {this.state.student.map((std) => {
                return <li>{std}</li>
                

            })} */}
            <input type="text" value={this.state.student} onChange={this.handelchange} />
            {this.state.editindex === null ? <button type="button" onClick={this.handeladd}>adduser</button> : <button type="button" onClick={this.handelUpdate}>Update</button>}
            <ul>
                {this.state.student.map(() => {
                    return <li key={i}><span onClick={this.handeledit}>
                        edit
                    </span></li>
                })}
            </ul>
            <span onClick={this.handeldelete}>Delete</span>





        </div>
    }
}
function mapstatetoprops(state) {
    return state
}
export default connect(mapstatetoprops)(Student)