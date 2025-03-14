import { Component } from "react";

class Socialmediaform extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <form action="">
                <label htmlFor="">ID</label>
                <input type="text" id="" name="id" value={this.props.media.id} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">Content</label>
                <input type="text" id="" name="content" value={this.props.media.content} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">Likes</label>
                <input type="text" id="" name="likes" value={this.props.media.likes} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">Comments</label>
                <input type="text" id="" name="comments" value={this.props.media.comments} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">author</label>
                <input type="text" id="" name="author" value={this.props.media.author} onChange={this.props.handelevent} />{""}
                {this.props.editindex === null ? (<button type="button" onClick={this.props.adduser}>adduser</button>) : (<button type="button" onClick={this.props.handelupdate}>update</button>)}
            </form>

        </div>
    }
}
export default Socialmediaform;