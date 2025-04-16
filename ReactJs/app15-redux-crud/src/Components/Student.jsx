import { Component } from "react";
import { connect } from "react-redux"

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: ["kiran", "raju", "ravi"]
        }
    }
    render() {
        return <div>
            {/* {this.state.student.map((std) => {
                return <li>{std}</li>
                

            })} */}
            <input type="text" />

        </div>
    }
}
function mapstatetoprops(state) {
    return state
}
export default connect(mapstatetoprops)(Student)