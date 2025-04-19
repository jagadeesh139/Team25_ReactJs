function MyComponent() {
    return (
        <div>
            <h1>Hello from Functional Component</h1>
            <form action="">
                <label htmlFor="">First Name:-</label>
                <input type="text" />
                <br />
                <label htmlFor="">Last name:-</label>
                <input type="text" />
                <br />
                <label htmlFor="">Email:-</label>
                <input type="text" />
                <br />
                <label htmlFor="">password:-</label>
                <input type="text" />
                <br />
                <button type="button" style={{ background: "blue", color: "white", margin: "10px", }} onClick={() => { handeladduser() }}>add user</button>
                <button type="button" style={{ background: "red", color: "white", margin: "10px", }} onClick={() => { handelupdateuser() }}>Update user</button>

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
                <tbody></tbody>
            </table>
        </div>
    );
}

export default MyComponent;