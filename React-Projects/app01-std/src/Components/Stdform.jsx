import { Component } from "react";
import"./Stdform.css"


class Stdform extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <div class="form-container">
                <h2>Student Enrollment Form</h2>
                <form id="enrollmentForm">
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" value={this.props.student.name} name="name" onChange={this.props.handelevent} required />
                    </div>

                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <select id="gender" name="gender" value={this.props.student.gender} onChange={this.props.handelevent} required>
                            <option value="">-- Select --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" value={this.props.student.email} onChange={this.props.handelevent} required />
                    </div>
                    <div class="form-group">
                        <label for="course">Course Enrolled</label>
                        <select id="course" name="course" value={this.props.student.course} onChange={this.props.handelevent} required>
                            <option value="">-- Select --</option>
                            <option value="front end">Front End</option>
                            <option value="Backend">Backend</option>
                            <option value="fullstack">FullSTack</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="contact">Contact Number</label>
                        <input type="tel" id="contact" name="contact" value={this.props.student.contact} onChange={this.props.handelevent} required />
                    </div>
                    <div class="form-group">
                        <label for="batch">Batch</label>
                        <select id="batch" name="batch" value={this.props.student.batch} onChange={this.props.handelevent} required>
                            <option value="">-- Select --</option>
                            <option value="Batch 01">Batch 01</option>
                            <option value="Batch 02">Batch 02</option>
                            <option value="Batch 03">Batch 03</option>
                        </select>
                    </div>
                    {this.props.editindex === null ? (<button type="button" onClick={this.props.handelregister}>Register</button>) : (<button type="button" onClick={this.props.handelUpdate}>Update</button>)}


                </form>
            </div>
        </div>
    }
}
export default Stdform;