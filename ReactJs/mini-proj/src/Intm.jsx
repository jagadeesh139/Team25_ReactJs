import { Component } from "react";
import Intmform from "./Intmform";
import Intmtable from "./Intmtable";
import axios from "axios";

class Intm extends Component {
    constructor() {
        super()
        this.state = {
            invent: {
                id: "",
                name: "",
                quantity: "",
                price: "",
                category: ""

            },
            system: [],
            index: null

        }
    }
    componentDidMount = () => {
        this.getdatafromserver()
    }
    getdatafromserver = () => {
        axios.get("http://localhost:3000/system").then(({ data }) => {
            this.setState({ system: data })

        })
    }
    handelevent = (e) => {
        const newinvent = { ...this.state.invent }
        newinvent[e.target.name] = e.target.value
        this.setState({ invent: newinvent })

    }
    adddata = () => {
        axios.post("http://localhost:3000/system", this.state.invent).then(() => {
            this.getdatafromserver()
            this.clearform()

        })

    }
    handeledit = (val, i) => {
        { this.setState({ invent: val, index: i }) }

    }
    handeldelete = (val) => {
        axios.delete(`http://localhost:3000/system/` + val.id).then(() => {
            this.getdatafromserver()
        })
    }
    handelupdate = () => {
        axios.put("http://localhost:3000/system/" + this.state.system[this.state.index].id, this.state.invent).then(() => {
            this.getdatafromserver()
            this.setState({ index: null })
            this.clearform()
        })
    }
    clearform = () => {
        {
            this.setState({
                invent: {
                    id: "",
                    name: " ",
                    quantity: "",
                    price: "",
                    category: ""

                }
            })
        }
    }
    render() {
        return <div>
            <Intmform invent={this.state.invent}
                handelevent={this.handelevent}
                handelupdate={this.handelupdate}
                index={this.state.index}
                adddata={this.adddata} />
            <hr />
            <Intmtable system={this.state.system}
                handeledit={this.handeledit}
                handeldelete={this.handeldelete} />

        </div>
    }

}
export default Intm;