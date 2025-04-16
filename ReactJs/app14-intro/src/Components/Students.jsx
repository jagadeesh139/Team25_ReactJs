import { Component } from "react";
import { connect } from "react-redux";

class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Student: ["kiran", "Kumar", "raju", "ravi"]
        }
    }
    render() {
        return <div>
            {this.state.Student.map((std) => {
                return <li>
                    {std}
                </li>

            })}

        </div>
    }
}
function mapstatetoprop(state) {
    return state;

}
export default connect(mapstatetoprop)(Students)