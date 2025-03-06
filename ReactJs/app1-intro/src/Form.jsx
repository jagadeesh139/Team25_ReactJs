import { Component } from "react";

class From extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: ""
            },
            user: [] 
        }
    }
    handlechange = (event) => {
        console.log(event.target.name);
        const newperson = { ...this.state.person };
        newperson[event.target.name] = event.target.value
        this.setState({ person: newperson })
    }
    addData = () => {
        const newUser = [...this.state.user]
        newUser.push(this.state.person)
        this.setState({ user: newUser })
        console.log(this.state.person)

    }

    render() {
        return <div>
            <form action="">
                <label htmlFor="">First Name:</label>
                <input type="text" name="fname" id=""
                    value={this.state.person.fname} onChange={this.handlechange} />{""}
                <br />
                <label htmlFor="">LastName :</label>
                <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.handlechange} />{""}
                <br />
                <label htmlFor="">Email :</label>
                <input type="text" name="email" id="" value={this.state.person.email} onChange={this.handlechange} />

                <button type="button" onClick={this.addData}>Adddata</button>
            </form>
            <hr />
            {this.state.user.map(function (value) {
                return <ul>
                    <li>{value.fname}</li>
                    <li>{value.lname}</li>
                    <li>{value.email}</li>
                </ul>

            })}



        </div>
    }
}
export default From;