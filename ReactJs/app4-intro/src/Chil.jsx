import { Component } from "react";

class Chil extends Component {
   render() {
      return <div>
         <ul>
            {this.props.all.map(function (val) {
               return <li>{val}</li>
            })}
         </ul>
      </div>
   }
}
export default Chil;