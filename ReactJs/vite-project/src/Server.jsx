import { Component } from "react";

class Server extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: "",
                id: ""

            },
            user: [],
            editindex: null
        }
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">firstname</label>
                <input type="text" id="" value={this.state.person.fname} name="fname" onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">lastname</label>
                <input type="text" id="" name="lname" value={this.state.person.lname} onChange={this.handelevent} />{""}
                <label htmlFor="">Email</label>
                <input type="text" id="" name="email" value={this.state.person.email} onChange={this.handelevent} />{""}
                <label htmlFor="">ID</label>
                <input type="text" id="" name="id" value={this.state.person.id} onChange={this.handelevent} />{""}
            </form>
        </div>
    }
}
export default Server;