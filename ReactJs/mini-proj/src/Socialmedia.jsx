
import { Component } from "react";
import axios from "axios";
import Socialmediaform from "./Socialmediaform";
import Socialmediatable from "./Socialmediatable";

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
        axios.put("http://localhost:3000/posts/" + this.state.posts[this.state.editindex].id, this.state.media).then(() => {
            this.getdatafromserver()
            this.setState({ editindex: null })
            this.clearform()

        })
    }
    clearform() {

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
        axios.delete("http://localhost:3000/posts/" + val.id).then(() => {
            this.getdatafromserver()
        })
    }
    render() {
        return <div>
            <Socialmediaform media={this.state.media}
                editindex={this.state.editindex}
                adduser={this.adduser}
                handelevent={this.handelevent}
                handelupdate={this.handelupdate} />
            <hr />
            <Socialmediatable posts={this.state.posts}
                handeledit={this.handeledit}
                handeldelete={this.handeldelete} />



        </div>
    }
}
export default Socialmedia;