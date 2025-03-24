import { Component } from "react";

class Hoverhandel extends Component {
    render() {
        return <div>
            <h2>{this.props.count}</h2>
            <button onMouseOver={this.props.handelincreament}>increament</button>
            <button onMouseOver={this.props.handelDecreament}>Decreament</button>
            <button onMouseOver={this.props.handelReset}>Reset</button>

        </div>
    }
}
export default Hoverhandel;