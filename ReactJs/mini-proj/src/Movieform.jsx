import { Component } from "react";

class Movieform extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            
             <form>
                <label>seatNumber</label>
                <input type="text" name="seatNumber" value={this.props.Data.seatNumber} onChange={this.props.handelevent} />
                <br />
                <label>isBooked</label>
                <input type="text" name="isBooked" value={this.props.Data.isBooked} onChange={this.props.handelevent} />
                <br />
                <label>Category</label>
                <input type="text" name="category" value={this.props.Data.category} onChange={this.props.handelevent} />
                <br />
                <label>userID</label>
                <input type="text" name="userID" value={this.props.Data.userID} onChange={this.props.handelevent} />
                
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
export default Movieform;