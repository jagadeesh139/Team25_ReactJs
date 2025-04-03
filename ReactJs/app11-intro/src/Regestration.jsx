import { Component } from "react";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function handleRouterNavigate(Component) {
    return function (props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

class Regestration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Users: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            }
        }
    }
    handleChange = (e) => {
        const newUsers = { ...this.state.Users }
        newUsers[e.target.name] = e.target.value
        this.setState({ Users: newUsers })

    }
    handleRegistration = () => {
        axios.post("http://localhost:3000/Users", this.state.Users).then(() => {
            this.props.navigate("/Login")
        })

    }
    render() {
        return <div class="container text-center">
            <div class="row">
                <div class="col">
                    Column
                </div>
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                First Name
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                name="fname"
                                value={this.state.fname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Last Name
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                name="lname"
                                value={this.state.lname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                value={this.state.email}
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
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={this.handleRegistration}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col">
                    Column
                </div>
            </div>
        </div>
    }
}
export default handleRouterNavigate(Regestration);