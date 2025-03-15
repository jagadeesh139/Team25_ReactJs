import { Component } from "react";

class Digitform extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
             <form>
                    <label>Id</label>
                    <input type="text" name="id" value={this.props.Street.id} onChange={this.props.handelevent} />
                    <br />
                    <label>name</label>
                    <input type="text" name="question" value={this.props.Street.name} onChange={this.props.handelevent} />
                    <br />
                    <label>email</label>
                    <input type="text" name="options" value={this.props.Street.email} onChange={this.props.handelevent} />
                    <br />
                    <label>phone</label>
                    <input type="text" name="correctAnswer" value={this.props.Street.phone} onChange={this.props.handelevent} />
                    <br />
                    <label>Address</label>
                    <input type="text" name="score" value={this.props.Street.address} onChange={this.props.handelevent} />
                    <br />
                    {this.props.index === null ? (
                        <button type="button" onClick={this.props.adddata}>Addform</button>
                    ) : (
                        <button type="button" onClick={this.props.handleupdate}>Update</button>
                    )}
                </form>

        </div>

    }
}
export default Digitform;