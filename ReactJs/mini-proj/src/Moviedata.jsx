import { Component } from "react";
import Movieform from "./Movieform";
import Movietable from "./Movietable";
import axios from "axios";

class Moviedata extends Component {
    constructor() {
        super()
        this.state = {
            Data: {
                seatNumber: "",
                isBooked: "",
                category: "",
                userID: ""
            },
            movie: [],
            index: null
        }
    }
    componentDidMount = () => {
        this.getdatafromserver()
    }
    getdatafromserver = () => {
        axios.get("http://localhost:3000/movie").then(({ data }) => {
            this.setState({ movie: data })

        })
    }
    handelevent = (e) => {
        const newData = { ...this.state.Data }
        newData[e.target.name] = e.target.value
        this.setState({ Data: newData })

    }

    adddata = () => {
        axios.post("http://localhost:3000/movie", this.state.Data).then(() => {
            this.getdatafromserver()
            this.clearform()

        })

    }
    handeledit = (val, i) => {
        { this.setState({ Data: val, index: i }) }

    }
    handeldelete = (val) => {
        axios.delete(`http://localhost:3000/movie/` + val.id).then(() => {
            this.getdatafromserver()
        })
    }
    handelupdate = () => {
        axios.put("http://localhost:3000/movie/" + this.state.movie[this.state.index].id, this.state.Data).then(() => {
            this.getdatafromserver()
            this.setState({ index: null })
            this.clearform()
        })
    }
    clearform = () => {
        {
            this.setState({
                Data: {
                    seatNumber: "",
                    isBooked: "",
                    category: "",
                    userID: ""
                }
            })
        }
    }
    render() {
        return <div>
            <Movieform Data={this.state.Data}
                handelevent={this.handelevent}
                handelupdate={this.handelupdate}
                index={this.state.index}
                adddata={this.adddata}/>
            <Movietable movie={this.state.movie}
                handeledit={this.handeledit}
                handeldelete={this.handeldelete}/>

        </div>
    }
}
export default Moviedata;