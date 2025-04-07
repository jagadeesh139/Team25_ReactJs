import { Component } from "react";
import { handleRouterNavigate } from "./Regestration";
import axios from "axios";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Users: {
                email: "",
                password: ""
            }
        }
    }
    handleDashboardNavigation = () => {
        this.props.navigate("/dashboard");
    };
    handleChange = (e) => {
        const newUser = { ...this.state.Users };
        newUser[e.target.name] = e.target.value;
        this.setState({ Users: newUser });
    };
    handleLogin = () => {
        console.log(this.state.Users);
        // 1. Get ALL users from Server
        axios.get("http://localhost:3000/users").then(({ data }) => {
            console.log(data);
            const isUserExist = data.find((usr) => {
                return (
                    usr.email === this.state.Users.email &&
                    usr.password === this.state.Users.password,
                    console.log(usr.email === this.state.Users.email &&
                        usr.password === this.state.Users.password,)

                );
            });
            if (isUserExist) {
                // this.props.navigate("/dashboard");
                this.setState({ errorMessage: "Invalid Login " });
            } else {
                // this.setState({ errorMessage: "Invalid Login " });
                this.props.navigate("/dashboard");
            }
            console.log(isUserExist);
        });
    }
    render() {
        const { email, password } = this.state.Users;
        return <form action="">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
            </div>
            <div className="text-center">
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.handleLogin}
                >
                    Submit
                </button>
                <h2 style={{ color: "red" }}>{this.state.errorMessage}</h2>
            </div>
        </form>


    }
}
export default handleRouterNavigate(Login);