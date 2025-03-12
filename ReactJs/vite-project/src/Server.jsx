import { Component } from "react";
import axios from 'axios'


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

    handelevent = (e) => {
        const newperson = { ...this.state.person }
        newperson[e.target.name] = e.target.value
        this.setState({ person: newperson })
    }
    adduser = () => {


        // const newuser = [...this.state.user]
        // newuser.push(this.state.person)
        // this.setState({ user: newuser })
        // this.clearuser()

    }
    handeldelete = (i) => {
        const newuser = [...this.state.user]
        newuser.splice(i, 1)
        this.setState({ user: newuser })

    }
    handeledit = (value, i) => {
        { this.setState({ person: value, editindex: null }) }

    }
    handelupdate = () => {
        const newuser = [...this.state.user]
        newuser[this.state.editindex] = this.state.person
        this.setState({ user: newuser, editindex: null })
        this.clearuser()
    }

    clearuser = () => {
        {
            this.setState({
                person: {
                    fname: "",
                    lname: "",
                    email: "",
                    id: ""

                }

            })
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

                {this.state.editindex === null ? (<button type="button" onClick={this.adduser}>adduser</button>) : (<button type="button" onClick={this.handelupdate}> Update</button>)}



            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Lastname</th>
                        <th>email</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.user.map((value, i) => {
                        return <tr key={i}>
                            <td>{value.fname}</td>
                            <td>{value.lname}</td>
                            <td>{value.email}</td>
                            <td>{value.id}</td>
                            <td><button type="button" onClick={() => { this.handeledit(value, i) }}>edit</button></td>

                            <td ><button type="button" onClick={() => { this.handeldelete(i) }}>delete</button></td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>
    }
}
export default Server;