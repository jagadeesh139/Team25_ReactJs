import { Component } from "react";


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
                        <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div class="form-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" required />
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <select id="gender" name="gender" required>
                            <option value="">-- Select --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="course">Course Enrolled</label>
                        <input type="text" id="course" name="course" required />
                    </div>
                    <div class="form-group">
                        <label for="contact">Contact Number</label>
                        <input type="tel" id="contact" name="contact" required />
                    </div>
                    <div class="form-group">
                        <label for="gender">Batch</label>
                        <select id="gender" name="gender" required>
                            <option value="">-- Select --</option>
                            <option value="male">BatchA1</option>
                            <option value="female">BatchA2</option>
                            <option value="other">BatchA3</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    }
}
export default Stdform;