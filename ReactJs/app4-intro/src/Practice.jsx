import { Component } from "react";

class Practice extends Component {
    constructor() {
        super()
        this.state = {
            addrees: {
                getlocation: {
                    lat: "-37.3159",
                    long: "81.1496"
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874"


            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
              firstname: "john",
              lastname: "doe"
            },
            phone: "1-570-236-7033",
            __v: 0
        
        }
    }
    render (){
        return <div>
            <h2>welcome to Oject display....!</h2>
            <ul>
                <li>{this.state.addrees.getlocation.lat}</li>
                <li>{this.state.addrees.getlocation.long}</li>
                <li>{this.state.addrees.city}</li>
                <li>{this.state.addrees.street}</li>
                <li>{this.state.addrees.number}</li>
                <li>{this.state.addrees.zipcode}</li>
                <li>{this.state.id}</li>
                <li>{this.state.email}</li>
                <li>{this.state.username}</li>
                <li>{this.state.password}</li>
                <li>{this.state.name.firstname}</li>
                <li>{this.state.name.lastname}</li>
                <li>{this.state.phone}</li>
                <li>{this.state.__v}</li>
            </ul>
        </div>
    }
}
export default Practice;