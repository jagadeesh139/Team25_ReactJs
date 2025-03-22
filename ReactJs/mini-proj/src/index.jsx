import axios from "axios";
import { Component } from "react";

class index extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: ""
            },
            arrr: [],
            editi: null
        }
    }
    componentDidMount = () => {
        getdatafromserver()
    }
    handelevent = (e) => {
        const newuser = { ...this.state.user }
        newuser(e.target.name) = e.target.value
        this.setState({ user: newuser })
    }
    adduser = () => {
        axios.post("url", this.state.user).then(() => {
            this.getdatafromserver()
            this.clearform()

        })
    }
    handeldelete=(val)=>{
        axios.delete("")

    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">Fname</label>
                <input type="text" name="fname" id="" value={this.state.user.fname} onChange={this.handelevent} />
                <label htmlFor="">lname</label>
                <input type="text" id="" name="lname" value={this.state.user.lname} onChange={this.handelevent} />
                <label htmlFor="">email</label>
                <input type="text" id="" name="email" value={this.state.user.email} onChange={this.handelevent} />
                {this.state.editi === null ? (<button type="button" onClick={this.adduser} >adduser</button>) : (<button type="button" onClick={this.updateuser}>Update</button>)}
            </form>

        </div>
    }
}
export default index;