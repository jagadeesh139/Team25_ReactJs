import { Component } from "react";
import Chil from "./Chil";

class Jagga extends Component {
    constructor() {
        super()

        this.state = {
            student: {
                fname: "ram",
                lname: "raju",
                email: "ram@gmail.com"
            },
            person: ["kiran", "kumar", "raju"]
        }
    }
    objeect = () => {
        this.setState({
            student: {
                fname: "raju",
                lname: "kumar",
                email: "raju@gmail.com"
            }, 
            person:["raju","ravi","ramu"]
        })
        
    }

    render() {
        return <div>
            {/* <h2>{this.state.student.email}</h2> */}
            <h2>welcome to Object and array Componnets......</h2>
            <ul>
                <li>{this.state.student.fname}</li>
                <li>{this.state.student.lname}</li>
                <li>{this.state.student.email}</li>
            </ul>
            <button onClick={this.objeect}>change Object details</button>
            {/* <ul>
                {this.state.person.map(function(val) {
                        return <li>{val}</li>
                    })
                }
            </ul> */}
            <Chil all={this.state.person}/>
        </div>
    }

}
export default Jagga;