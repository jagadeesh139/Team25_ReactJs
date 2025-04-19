import { useState } from "react";

function MyComponent() {
    const [formdata, setformdata] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""

    })
    const [user, setuser] = useState([])
    const [i, editindex] = useState(null)

    const handelevent = (e) => {
        const newformdata = { ...formdata }
        newformdata[e.target.name] = e.target.value
        setformdata(newformdata)
    }
    const handeladduser = () => {
        const newuser = [...user]
        newuser.push(formdata)
        setuser(newuser)
        setformdata({ fname: "", lname: "", email: "", password: "" })

    }
    const handeldelete = (i) => {

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
                <input type="text" name="fname" value={formdata.fname} onChange={handelevent} />{""}
                <br />
                <label htmlFor="">Last name:-</label>
                <input type="text" name="lname" value={formdata.lname} onChange={handelevent} />{""}
                <br />
                <label htmlFor="">Email:-</label>
                <input type="text" name="email" value={formdata.email} onChange={handelevent} />{""}
                <br />
                <label htmlFor="">password:-</label>
                <input type="text" name="password" value={formdata.password} onChange={handelevent} />{""}
                <br />
                {i === null ? (<button type="button" style={{ background: "blue", color: "white", margin: "10px", }} onClick={() => { handeladduser() }}>adduser</button>) : (
                    <button type="button" style={{ background: "red", color: "white", margin: "10px", }} onClick={() => { handelupdate() }}>Update user</button>)}


            </form>
            <table border={2}>
                <thead>
                    <tr >
                        <th>First name</th>
                        <th>last Name</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data, i) => {
                        return <tr key={i}>
                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>

                            <td><button type="button" onClick={() => { handeledit(data, i) }}>Edit</button></td>
                            <td><button type="button" onClick={() => { handeldelete(i) }}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default MyComponent;