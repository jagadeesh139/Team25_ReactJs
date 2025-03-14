import { Component } from "react";

class LibraryForm extends Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <form>
                <label>Id</label>
                <input type="text" name="id" value={this.props.library.id} onChange={this.props.handleEvent} />
                <br />
                <label>title</label>
                <input type="text" name="title" value={this.props.library.title} onChange={this.props.handleEvent} />
                <br />
                <label>author</label>
                <input type="text" name="author" value={this.props.library.author} onChange={this.props.handleEvent} />
                <br />
                <label>isAvailable</label>
                <input type="text" name="isAvailable" value={this.props.library.isAvailable} onChange={this.props.handleEvent} />
                <br />
                <label>borrower</label>
                <input type="text" name="borrower" value={this.props.library.borrower} onChange={this.props.handleEvent} />
                <br />
                {this.props.index === null ? (
                    <button type="button" onClick={this.props.addData}>AddUser</button>
                ) : (
                    <button type="button" onClick={this.props.handleUpdate}>Update</button>
                )}
            </form>

        </div>
    }
}
export default LibraryForm;