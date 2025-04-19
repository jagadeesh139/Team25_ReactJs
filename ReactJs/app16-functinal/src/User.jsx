import { useState } from "react";

function MyComponent() {
    const [formdata, setformdata] = useState({
        fistname: "",
        lastname: "",
        email: "",
        password: ""

    })
    const [user, setuser] = useState([])
    const [index, editindex] = useState(null)

    const handelevent = (e) => {
        const newformdata = { ...formdata }
        newformdata[e.target.name] = e.target.value
        setformdata({ newformdata })
    }
    const handeldelete = () => {

    }
    const handeledit = () => {

    }
    const handelupdate = () => {

    }
    return (
        <div>
            <h1>Hello from Functional Component</h1>
            <form action="">
                <label htmlFor="">First Name:-</label>
                <input type="text" name="firstname" value={formdata.fistname} onChange={handelevent} />
                <br />
                <label htmlFor="">Last name:-</label>
                <input type="text" name="lastname" value={formdata.lastname} onChange={handelevent} />
                <br />
                <label htmlFor="">Email:-</label>
                <input type="text" name="email" value={formdata.email} onChange={handelevent} />
                <br />
                <label htmlFor="">password:-</label>
                <input type="text" name="password" value={formdata.password} onChange={handelevent} />
                <br />
                <button type="button" style={{ background: "blue", color: "white", margin: "10px", }} onClick={() => { handeladduser() }}>add user</button>
                <button type="button" style={{ background: "red", color: "white", margin: "10px", }} onClick={() => { handelupdate() }}>Update user</button>

            </form>
            <table border={2}>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>last Name</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {formdata.map((data, index) => {
                        return <tr>
                            <td>{data.fistname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td><button type="button" onClick={() => { handeledit }}>Edit</button></td>
                            <td><button type="button" onClick={() => { handeldelete }}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default MyComponent;