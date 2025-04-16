import { Component } from "react";

class Employes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employe: ["St Emp 1",
                "St Emp 2",
                "St Emp 3",
                "St Emp 4",
                "St Emp 5"]
        }
    }
    render() {
        return <div>
            {this.state.employe.map((emp) => {
                return <li>{emp}</li>

            })}

        </div>
    }
}

export default Employes;