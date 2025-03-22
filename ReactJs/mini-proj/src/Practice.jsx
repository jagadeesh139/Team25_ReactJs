import { Component } from "react";
import Practiceform from "./Practiceform";

class Practice extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: ""
            },
            register: [],
            index: null
        }
    }
    handelevent = (e) => {
        const newuser = { ...this.state.user }
        newuser(e.target.name) = e.target.value
        this.setState({ user: newuser })
    }
    adduser = () => {
        const newregister = [...this.state.register]
        newregister.push(this.state.user)
        this.setState({ register: newregister })
    }




    render() {
        return <div>
            <Practiceform user={this.state.user}
                index={this.state.index}
                adduser={this.adduser}

            />

        </div>
    }
}
export default Practice;