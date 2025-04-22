import { Component } from "react";
import Login from "./Login";



class NavBar extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <link rel="stylesheet" href="" />
                                <a class="nav-link active" aria-current="page" href="#">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                                <link to={Login} href="" />
                            </li>
                            <li class="nav-item">
                                <link to={dashboard} href="" />
                                <a class="nav-link" href="#">dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    }
}
export default NavBar;