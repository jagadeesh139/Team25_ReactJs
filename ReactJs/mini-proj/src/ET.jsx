import { Component } from "react";
import ETform from "./ETform";
import ETtable from "./ETtable";
import axios from "axios";

class ET extends Component {
    constructor() {
        super()
        this.state = {
            tracker: {
                id: "",
                amount: "",
                category: "",
                description: "",
                date: ""
            },
            expense: [],
            index: null

        }
    }
    componentDidMount = () => {
        this.getdatafromserver()
    }
    getdatafromserver = () => {
        axios.get("http://localhost:3000/expense").then(({ data }) => {
            this.setState({ expense: data })

        })
    }
    handelevent = (e) => {
        const newtracker = { ...this.state.tracker }
        newtracker[e.target.name] = e.target.value
        this.setState({ tracker: newtracker })

    }

    adddata = () => {
        axios.post("http://localhost:3000/expense", this.state.tracker).then(() => {
            this.getdatafromserver()
            this.clearform()

        })

    }
    handeledit = (val, i) => {
        { this.setState({ tracker: val, index: i }) }

    }
    handeldelete = (val) => {
        axios.delete(`http://localhost:3000/expense/` + val.id).then(() => {
            this.getdatafromserver()
        })
    }
    handelupdate = () => {
        axios.put("http://localhost:3000/expense/" + this.state.expense[this.state.index].id, this.state.tracker).then(() => {
            this.getdatafromserver()
            this.setState({ index: null })
            this.clearform()
        })
    }
    clearform = () => {
        {
            this.setState({
                tracker: {
                    id: "",
                    amount: "",
                    category: "",
                    description: "",
                    date: ""
                }
            })
        }
    }
    render() {
        return <div>
            <ETform tracker={this.state.tracker}
                handelevent={this.handelevent}
                handelupdate={this.handelupdate}
                index={this.state.index}
                adddata={this.adddata} />
            <hr />
            <ETtable expense={this.state.expense}
                handeledit={this.handeledit}
                handeldelete={this.handeldelete} />

        </div>
    }


}
export default ET;