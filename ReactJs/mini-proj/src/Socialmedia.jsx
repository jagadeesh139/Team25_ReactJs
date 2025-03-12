import { Component } from "react";

class Socialmedia extends Component {
    constructor() {
        super()
        this.state = {
            media: {
                id: "",
                content: "",
                likes: "",
                comments: "",
                authour: ""

            },
            posts: [],
            editindex: null

        }
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">ID</label>
                <input type="text" id="" name="id" value={this.state.media.id} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Content</label>
                <input type="text" id="" name="content" value={this.state.media.content} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Likes</label>
                <input type="text" id="" name="likes" value={this.state.media.likes} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Comments</label>
                <input type="text" id="" name="comments" value={this.state.media.comments} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Authour</label>
                <input type="text" id="" name="authour" value={this.state.media.authour} onChange={handelevent} />{""}
                {this.state.editindex === null ? (<button type="button" onClick={this.adduser}>adduser</button>) : (<button type="button" onClick={this.handelupdate}>update</button>)}
            </form>

            <table  border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Content</th>
                        <th>Likes</th>
                        <th>Comments</th>
                        <th>Authour</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((val,i)=>{
                        

                    })}
                </tbody>
            </table>
        </div>
    }
}


export default Socialmedia;