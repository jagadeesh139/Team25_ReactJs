import { Component } from "react";

class Intmform extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <form>
                <label>Id</label>
                <input type="text" name="id" value={this.props.invent.id} onChange={this.props.handelevent} />
                <br />
                <label>Name</label>
                <input type="text" name="name" value={this.props.invent.name} onChange={this.props.handelevent} />
                <br />
                <label>Quantity</label>
                <input type="text" name="quantity" value={this.props.invent.quantity} onChange={this.props.handelevent} />
                <br />
                <label>Price</label>
                <input type="text" name="price" value={this.props.invent.price} onChange={this.props.handelevent} />
                <br />
                <label> Category</label>
                <input type="text" name="category" value={this.props.invent.category} onChange={this.props.handelevent} />
                <br />
                {this.props.index === null ? (
                    <button type="button" onClick={this.props.adddata}>Addform</button>
                ) : (
                    <button type="button" onClick={this.props.handelupdate}>Update</button>
                )}
            </form>
        </div>
    }
}
export default Intmform;