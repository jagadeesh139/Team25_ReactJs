
import { Component } from "react";


class EComerceform extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <form>
                <label>Id:</label>
                <input type="text" name="id" value={this.props.comerce.id} onChange={this.props.handelevent} />
                <br />
                <label>Name:</label>
                <input type="text" name="name" value={this.props.comerce.name} onChange={this.props.handelevent} />
                <br />
                <label>Price:</label>
                <input type="text" name="price" value={this.props.comerce.price} onChange={this.props.handelevent} />
                <br />
                <label>Quantity:</label>
                <input type="text" name="quantity" value={this.props.comerce.quantity} onChange={this.props.handelevent} />
                <br />
                <label>Total Price:</label>
                <input type="text" name="totalprice" value={this.props.comerce.totalprice} onChange={this.props.handelevent} />
                <br />

                {this.props.editindex === null ? (
                    <button type="button" onClick={this.props.adduser}>Add User</button>
                ) : (
                    <button type="button" onClick={this.props.handelupdate}>Update</button>
                )}
            </form>
        </div>
    }
}
export default EComerceform;