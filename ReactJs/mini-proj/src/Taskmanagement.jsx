import axios from "axios";
import { Component } from "react";

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
            <form action="">
                <label htmlFor="">Id</label>
                <input type="text" name="id" value={this.state.management.id} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={this.state.management.title} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Description</label>
                <input type="text" name="description" value={this.state.management.description} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">status</label>
                <input type="text" name="status" value={this.state.management.status} onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">createdAt</label>
                <input type="text" name="createdAt" value={this.state.management.createdAt} onChange={this.handelevent} />{""}
                {this.state.index === null ? (<button type="button" onClick={this.adddata}>adddata</button>) : (<button type="button" onClick={this.handelupdate}>update</button>)}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>status</th>
                        <th>createdAt</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.task.map((val, i) => {
                        return <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>{val.status}</td>
                            <td>{val.createdAt}</td>
                            <td><button type="button" onClick={() => {
                                this.handeledit(val, i)
                            }}>edit</button></td>
                            <td ><button type="button" onClick={() => { this.handeldelete(i) }}>delete</button></td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>

    }
}
export default Taskmanagement;