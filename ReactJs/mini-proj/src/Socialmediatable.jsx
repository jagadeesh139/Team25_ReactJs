import { Component } from "react";

class Socialmediatable extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Content</th>
                        <th>Likes</th>
                        <th>Comments</th>
                        <th>Authour</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.posts.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.content}</td>
                            <td>{val.likes}</td>
                            <td>{val.comments}</td>
                            <td>{val.author}</td>
                            <td><button type="button" onClick={() => { this.props.handeledit(val, i) }}>edit</button></td>
                            <td><button type="button" onClick={() => { this.props.handeldelete(val) }}>Delete</button></td>
                        </tr>


                    })}
                </tbody>
            </table>

        </div>
    }
}
export default Socialmediatable;