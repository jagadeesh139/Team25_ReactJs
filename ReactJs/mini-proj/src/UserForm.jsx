import { Component } from "react";

class UserForm extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <form>
                <label>Id</label>
                <input type="text" name="id" value={this.props.profile.id} onChange={this.props.handleEvent} />
                <br />
                <label>Name</label>
                <input type="text" name="name" value={this.props.profile.name} onChange={this.props.handleEvent} />
                <br />
                <label>Email</label>
                <input type="text" name="email" value={this.props.profile.email} onChange={this.props.handleEvent} />
                <br />
                <label>role</label>
                <input type="text" name="role" value={this.props.profile.role} onChange={this.props.handleEvent} />
                <br />
                <label>preferences</label>
                <input type="text" name="preferences" value={this.props.profile.preferences} onChange={this.props.handleEvent} />
                <br />
                {this.props.index === null ? (
                    <button type="button" onClick={this.props.addData}>AddUser</button>
                ) : (
                    <button type="button" onClick={this.props.handleUpdate}>Update</button>
                )}
            </form>

        </div>

    }
}
export default UserForm;
