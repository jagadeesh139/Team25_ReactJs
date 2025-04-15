import axios from "axios";
import { Component } from "react";
import Digitform from "./Digitform";
import Digittabel from "./Digittabel";

class Digital extends Component {
    constructor() {
        super()
        this.state = {
            Street: {
                id: "",
                name: "",
                email: "",
                phone: "",
                address: ""
            },
            digit: [],
            index: null
        }
    }

    componentDidMount = () => {
        this.getdatafromserver()
    }
    getdatafromserver = () => {
        axios.get("http://localhost:3000/digit").then(({ data }) => {
            this.setState({ digit: data })

        })
    }
    handelevent = (e) => {
        const newStreet = { ...this.state.Street }
        newStreet[e.target.name] = e.target.value
        this.setState({ Street: newStreet })

    }

    adddata = () => {
        axios.post("http://localhost:3000/digit", this.state.Street).then(() => {
            this.getdatafromserver()
            this.clearform()

        })

    }
    handeledit = (val, i) => {
        { this.setState({ Street: val, index: i }) }

    }
    handeldelete = (val) => {
        axios.delete(`http://localhost:3000/digit/` + val.id).then(() => {
            this.getdatafromserver()
        })
    }
    handelupdate = () => {
        axios.put("http://localhost:3000/digit/" + this.state.digit[this.state.index].id, this.state.Street).then(() => {
            this.getdatafromserver()
            this.setState({ index: null })
            this.clearform()
        })
    }
    clearform = () => {
        {
            this.setState({
                Street: {
                    id: "",
                    name: "",
                    email: "",
                    phone: "",
                    address: ""
                }
            })
        }
    }
    render() {
        return <div>
            <Digitform Street={this.state.Street}
                handelevent={this.handelevent}
                handelupdate={this.handelupdate}
                index={this.state.index}
                adddata={this.adddata} />
            <hr />
            <Digittabel digit={this.state.digit}
                handeledit={this.handeledit}
                handeldelete={this.handeldelete} />

        </div>
    }
}
export default Digital;