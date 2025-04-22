import { Component } from "react";

class Studentform extends Component {

    render() {
        return <div style={{ background: "rgb(8, 183, 252)", border: "2px solid", padding: "20px" }} >
            <form action="" style={{ marginLeft: "500px" }}>
                <label htmlFor=""> Student Name:-</label>
                <input type="text" name="name"  value={this.props.name} placeholder="Student Name" id="" onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Email:-</label>
                <input type="text" name="email" value={this.props.email}  placeholder="email@gmail.com" id="" onChange={this.handelevent} />{""}
                <br />
                <label htmlFor="">Course:-</label>
                <input type="checkbox" name="course" id=""  value={this.props.course} />Front End Developer <input type="checkbox" onChange={this.handelevent} />Backend Developer
                <br />
                <label htmlFor="">Gender:-</label>
                <input type="radio" name="" id="" />Male <input type="radio" name="" id="" />Female <input type="radio" name="" id="" onChange={this.handelevent} />Others
                <br />
                <label htmlFor="">Batch:-</label>
                <input type="number" name="year"  value={this.props.batch} id="" onChange={this.handelevent} />
                <br />
                <label htmlFor="">Year:-</label>
                <input type="date" name="year" id="" value={this.props.year}  onChange={this.handelevent} />
                <br />
                {this.props.editindex === null ? (<button type="button"  onClick={this.props.handelregister} style={{ margin: "10px", background: "linear" } }>Register</button>) : (<button type="button" onClick={this.props.handelupdate} style={{ margin: "10px", background: "orange" }}>Update</button>
                )}



            </form>
        </div>
    }
}
export default Studentform;