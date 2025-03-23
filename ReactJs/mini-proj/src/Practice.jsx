import { Component } from "react";
import Practiceform from "./Practiceform";
import axios from "axios";
import PracticeTabel from "./PracticeTabel";

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
    componentDidMount = () => {
        this.getdatafromsever()
    }
    getdatafromsever = () => {
        axios.get("http://localhost:3000/register").then(({ data }) => {
            this.setState({ register: data })
        })
    }
    handelevent = (e) => {
        const newuser = { ...this.state.user }
        newuser[e.target.name] = e.target.value
        this.setState({ user: newuser })
    }

    adduser = () => {
        // const newregister = [...this.state.register]
        // newregister.push(this.state.user)
        // this.setState({ register: newregister })
        // this.clearform()
        axios.post("http://localhost:3000/register", this.state.user).then(() => {
            this.getdatafromsever()
            this.clearform()

        })

    }
    handeledit = (val, i) => {
        this.setState({ user: val, index: i }) 

    }
    handeldelte = (val) => {
        // const newregister = [...this.state.register]
        // newregister.splice(i, 1)
        // this.setState({ register: newregister })
        axios.delete("http://localhost:3000/register/" + val.id).then(() => {
            this.getdatafromsever()

        })
    }
    handelupdate = () => {
        // const newregister = [...this.state.register]
        // newregister[this.state.index] = this.state.user
        // this.setState({ register: newregister, index: null })
        // this.clearform()
        axios.put("http://localhost:3000/register/" + this.state.register[this.state.index].id, this.state.user).then(() => {
            this.getdatafromsever()
            this.setState({ index: null })
            this.clearform()

        })

    }
    clearform = () => {
        {
            this.setState({
                user: {
                    fname: "",
                    lname: "",
                    email: ""
                }
            })
        }
    }




    render() {
        return <div>

            <Practiceform index={this.state.index}
                user={this.state.user}
                adduser={this.adduser}
                handelupdate={this.handelupdate}
                handelevent={this.handelevent} />

            <PracticeTabel register={this.state.register}
                handeledit={this.handeledit}
                handeldelte={this.handeldelte} />


            {/* <form action="">
                <label htmlFor="">Firstname</label>
                <input type="text" name="fname" value={this.state.user.fname} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Lastname</label>
                <input type="text" name="lname" value={this.state.user.lname} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={this.state.user.email} onChange={this.handelevent} />{""}
                <br />
                {this.state.index === null ? (<button type="button" onClick={this.adduser}>adduser</button>) : (<button type="button" onClick={this.handelupdate}>Update</button>)}



            </form> */}
            <br />
            {/* <table border={1}>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.register.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td>{val.email}</td>
                            <td><button type="button" onClick={() => { this.handeledit(val, i) }}>edit</button></td>
                            <td><button type="button" onClick={() => { this.handeldelte(val) }}>Delete</button></td>
                        </tr>

                    })}
                </tbody>
            </table> */}
        </div>

    }
}
export default Practice;