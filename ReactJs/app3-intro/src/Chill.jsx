import { Component } from "react";

class Chill extends Component {
    render() {
        return <div>

            <ul><li>{this.props.all.Firstname}</li></ul>
            <ul><li>{this.props.all.Lastname}</li></ul>
            <ul><li>{this.props.all.Email}</li></ul>
            <ul><li>{this.props.all.address.street}</li></ul>
            <ul><li>{this.props.all.address.state}</li></ul>
            <ul><li>{this.props.all.address.Country}</li></ul>
        </div>
    }
}
export default Chill;