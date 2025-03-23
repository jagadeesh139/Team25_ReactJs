import { Component } from "react";

class PracticeTabel extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <table border={1}>
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
                    {this.props.register.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td>{val.email}</td>
                            <td><button type="button" onClick={() => { this.handeledit(val, i) }}>edit</button></td>
                            <td><button type="button" onClick={() => { this.handeldelte(val) }}>Delete</button></td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>
    }
}
export default PracticeTabel;