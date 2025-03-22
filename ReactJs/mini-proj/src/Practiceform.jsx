import { Component } from "react";

class Practiceform extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">Firstname</label>
                <input type="text" name="fname" value={this.props.user.fname} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">Lastname</label>
                <input type="text" name="lname" value={this.props.user.lname} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={this.props.user.email} onChange={this.props.handelevent} />{""}
                <br />
                {this.props.index === null ? (<button type="button" onClick={this.props.adduser}>adduser</button>) : (<button type="button" onClick={this.props.update}>Update</button>)}



            </form>

        </div>
    }
}
export default Practiceform;