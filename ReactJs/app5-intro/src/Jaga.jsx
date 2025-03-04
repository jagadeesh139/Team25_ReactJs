import { Component } from "react";

class Jaga extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <h2>welcome to Class component !!!</h2>
            <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt=""  width={100}/>
            <p>{this.props.all.email}</p>

        </div>
    }
}
export default Jaga;