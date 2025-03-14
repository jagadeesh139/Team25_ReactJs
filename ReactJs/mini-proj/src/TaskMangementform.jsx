import { Component } from "react";

class TaskMangementform extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">Id</label>
                <input type="text" name="id" value={this.props.management.id} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={this.props.management.title} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">Description</label>
                <input type="text" name="description" value={this.props.management.description} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">status</label>
                <input type="text" name="status" value={this.props.management.status} onChange={this.props.handelevent} />{""}
                <br />
                <label htmlFor="">createdAt</label>
                <input type="text" name="createdAt" value={this.props.management.createdAt} onChange={this.props.handelevent} />{""}
                {this.props.index === null ? (<button type="button" onClick={this.props.adddata}>adddata</button>) : (<button type="button" onClick={this.props.handelupdate}>update</button>)}
            </form>
        </div>
    }
}
export default TaskMangementform;