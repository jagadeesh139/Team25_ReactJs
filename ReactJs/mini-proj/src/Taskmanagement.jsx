import axios from "axios";
import { Component } from "react";
import TaskMangementform from "./TaskMangementform";
import Taskmanagementtable from "./Taskmanagementtable";

class Taskmanagement extends Component {
    constructor() {
        super()
        this.state = {
            management: {
                id: "",
                title: "",
                description: "",
                status: "",
                createdAt: ""
            },
            task: [],
            index: null
        }
    }

    componentDidMount = () => {
        this.getdatafromserver();
    }
    handelevent = (e) => {
        const newmanagement = { ...this.state.management }
        newmanagement[e.target.name] = e.target.value
        this.setState({ management: newmanagement })
    }

    adddata = () => {
        axios.post("http://localhost:3000/task" + this.state.management).then(() => {
            this.getdatafromserver()
        })
    }
    getdatafromserver = () => {
        axios.get("http://localhost:3000/task").then(({ data }) => {
            this.setState({ task: data })

        })
    }

    handeledit = (val, i) => {
        { this.setState({ management: val, index: i }) }

    }

    handeldelete = (val) => {
        axios.delete("http://localhost:3000/task/" + val.id).then(() => {
            this.getdatafromserver()

        })

    }

    handelupdate = () => {
        axios.put("http://localhost:3000/task/" + this.state.task[this.state.index].id, this.state.management).then(() => {
            this.getdatafromserver()
            this.setState({ index: null })
        })
    }
    clearform = () => {
        {
            this.setState({
                management: {
                    id: "",
                    title: "",
                    description: "",
                    status: "",
                    createdAt: ""
                }

            })
        }
    }
    render() {
        return <div>
            <TaskMangementform management={this.state.management}
                handelevent={this.handelevent}
                handelupdate={this.handelupdate}
                index={this.state.index}
                adddata={this.adddata} />
            <Taskmanagementtable task={this.state.task}
                handeledit={this.handeledit}
                handeldelete={this.handeldelete} />


        </div>

    }
}
export default Taskmanagement;