import { Component } from "react";

class ETform extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
           

            <form>
                <label>Id</label>
                <input type="text" name="id" value={this.props.tracker.id} onChange={this.props.handelevent} />
                <br />
                <label>Amount</label>
                <input type="text" name="amount" value={this.props.tracker.amount} onChange={this.props.handelevent} />
                <br />
                <label>Category</label>
                <input type="text" name="category" value={this.props.tracker.category} onChange={this.props.handelevent} />
                <br />
                <label>Description</label>
                <input type="text" name="description" value={this.props.tracker.description} onChange={this.props.handelevent} />
                <br />
                <label> Date</label>
                <input type="text" name="date" value={this.props.tracker.date} onChange={this.props.handelevent} />
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
export default ETform;