import { Component } from "react";
import Chill from "./Chill";

class Jagadeesh extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                Firstname: "jagadeesh",
                Lastname: "M",
                Email: "jagadeesh909@gmail.com",
                address: {
                    street: "santhepet",
                    state: "Andhra pradesh",
                    Country: "India"
                }
            }
        }
    }

    obj = () => {
        this.setState({
            person: {
                Firstname: "Chandu",
                Lastname: "M",
                Email: "Chandu909@gmail.com",
                address: {
                    street: "Chttoor",
                    state: "Andhra",
                    Country: "india"
                }
            }
        })


    }

    render() {
        return <div>
            <h2>create an Component....</h2>
            <ul><li>{this.state.person.Firstname}</li></ul>
            <ul><li>{this.state.person.Lastname}</li></ul>
            <ul><li>{this.state.person.Email}</li></ul>
            <ul><li>{this.state.person.address.street}</li></ul>
            <ul><li>{this.state.person.address.state}</li></ul>
            <ul><li>{this.state.person.address.Country}</li></ul>

            <button onClick={this.obj} > updatedetails...</button>

            <Chill all={this.state.person} />


        </div>
    }
}
export default Jagadeesh;