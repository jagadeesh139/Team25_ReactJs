import { Component } from "react";

class Practice1 extends Component {
    constructor() {
        super()
        this.state = {
            person:[
                {
                    fname: "ram",
                    lname: "raj"
                },
                {
                    firstname: "kiran",
                    lname: "kumar"
                },
                {
                    frname: "ravi",
                    lsname: "raju"
                }
    
            ]            
           


        }
    

    
    }

    render() {
        return <div>
            <ul>
                {this.state.person.map(function(value){
                    return <li>{value}</li>
                })}
            </ul>

        </div>
    }
}
export default Practice1;