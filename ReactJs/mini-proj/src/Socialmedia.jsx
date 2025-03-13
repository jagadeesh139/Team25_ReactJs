
import { Component } from "react";
import axios from "axios";

class Socialmedia extends Component {
    constructor() {
        super()
        this.state = {
            media: {
                id: "",
                content: "",
                likes: "",
                comments: "",
                author: ""

            },
            posts: [],
            editindex: null

        }
    }
    componentDidMount = () => {
        this.getdatafromserver()

    }
    adduser = () => {
        axios.post("http://localhost:3000/posts", this.state.media).then(() => {
            this.getdatafromserver()
            this.clearform()
        })
    }
    getdatafromserver = () => {
        axios.get("http://localhost:3000/posts").then(({ data }) => {
            this.setState({ posts: data })

        })
    }
    handelevent = (e) => {
        const newmedia = { ...this.state.media }
        newmedia[e.target.name] = e.target.value
        this.setState({ media: newmedia })
    }
    handeledit = (val, i) => {
        { this.setState({ media: val, editindex: i }) }
    }
    handelupdate = () => {
        axios.put("http://localhost:3000/posts/"+this.state.posts[this.state.editindex].id,this.state.media).then(() => {
            this.getdatafromserver()
            this.setState({ editindex: null })
            this.clearform()

        })
    }
    clearform (){
        
            this.setState({
                media: {
                    id: "",
                    content: "",
                    likes: "",
                    comments: "",
                    author: "",

                }
            })
        
    }

    handeldelete = (val) => {
        axios.delete("http://localhost:3000/posts/"+val.id).then(() => {
            this.getdatafromserver()
        })
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
                <label htmlFor="">author</label>
                <input type="text" id="" name="author" value={this.state.media.author} onChange={this.handelevent} />{""}
                {this.state.editindex === null ? (<button type="button" onClick={this.adduser}>adduser</button>) : (<button type="button" onClick={this.handelupdate}>update</button>)}
            </form>

            <table border={1}>
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
                    {this.state.posts.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.content}</td>
                            <td>{val.likes}</td>
                            <td>{val.comments}</td>
                            <td>{val.author}</td>
                            <td><button type="button" onClick={() => { this.handeledit(val, i) }}>edit</button></td>
                            <td><button type="button" onClick={() => { this.handeldelete(val) }}>Delete</button></td>
                        </tr>


                    })}
                </tbody>
            </table>
        </div>
    }
}
export default Socialmedia;