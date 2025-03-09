import { Component } from "react";

class Crud1 extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: ""
            },
            student: [],
            editindex: null
        }
    }
    handleevent = (e) => {
        const newperson = { ...this.state.person }
        newperson[e.target.name] = e.target.value
        this.setState({ person: newperson })
    }

    adduser = () => {
        const newstudent = [...this.state.student]
        newstudent.push(this.state.person)
        this.setState({ student: newstudent })
    }
    handledelete = (i) => {
        const newstudent = [...this.state.student]
        newstudent.splice(i, 1)
        this.setState({ student: newstudent })

    };
    handleedit = (student,i) => {
        this.setState({ person: student, editindex: i })
    }
    handleupdate=()=>{
        const newstudent = [...this.state.student]
        newstudent[this.state.editindex]=this.state.person
        this.setState({ student: newstudent, editindex: null });


    }
    clearform=()=>{
        {this.setState({person:{fname:"",lname:"",email:""}})}
    }

    render() {
        return <div>
            <form action="">
                <label htmlFor="">firstname:</label>
                <input type="text" name="fname" id="" value={this.state.person.fname} onChange={this.handleevent} />{""}
                <br />
                <label htmlFor="">Last Name:</label>
                <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.handleevent} />{""}
                <br />
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" value={this.state.person.email} onChange={this.handleevent} />{""}
                <br />

                <button type="button" onClick={this.adduser}>Adduser</button>
                <button type="button" onClick={this.handleupdate}>handleupdate</button>


            </form>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                </thead>
                <tbody>
                    {this.state.student.map(function (user, i) {
                        return <tr>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td><button type="button" onClick={() => { this.handleedit(user, i) }}>Edit</button></td>
                            <td><button type="button" onClick={() => { this.handledelete(i) }}>Delete</button></td>

                        </tr>
                    })}

                </tbody>
            </table>

            <hr />

            {this.state.student.map(function (user) {
                return <ul>
                    <li>{user.fname}</li>
                    <li>{user.lname}</li>
                    <li>{user.email}</li>
                </ul>

            })}

        </div>
    }
}
export default Crud1;