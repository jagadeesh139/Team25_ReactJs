import { Component } from "react";
import axios from "axios";
import EComercetable from "./EComercetable";
import EComerceform from "./EComerceform";

class EComerce extends Component {
    constructor() {
        super();
        this.state = {
            comerce: {
                id: "",
                name: "",
                price: "",
                quantity: "",
                totalprice: ""
            },
            total: [],
            editindex: null,
        };
    }

    componentDidMount() {
        this.getdatafromserver();
    }

    getdatafromserver = () => {
        axios.get("http://localhost:3000/total").then(({ data }) => {
            this.setState({ total: data });
        });
    };

    handelevent = (e) => {
        const newcomerce = { ...this.state.comerce };
        newcomerce[e.target.name] = e.target.value;
        this.setState({ comerce: newcomerce });
    };

    adduser = () => {
        axios.post("http://localhost:3000/total", this.state.comerce).then(() => {
            this.getdatafromserver();
            this.clearform();
        });
    };

    handeledit = (val, i) => {
        this.setState({ comerce: val, editindex: i });
    };

    handelupdate = () => {
        axios.put(`http://localhost:3000/total/${this.state.comerce.id}`, this.state.comerce)
            .then(() => {
                this.getdatafromserver();
                this.setState({ editindex: null });
                this.clearform();
            });
    };

    handeldelete = (val) => {
        axios.delete(`http://localhost:3000/total/${val.id}`).then(() => {
            this.getdatafromserver();
        });
    };

    clearform = () => {
        this.setState({
            comerce: {
                id: "",
                name: "",
                price: "",
                quantity: "",
                totalprice: "",
            },
            editindex: null,
        });
    };

    render() {
        return (
            <div>
                <EComerceform comerce={this.state.comerce}
                    handelevent={this.handelevent}
                    adduser={this.adduser}
                    handelupdate={this.handelupdate}
                    editindex={this.state.editindex} />

                <hr />
                <EComercetable
                    total={this.state.total}
                    handeledit={this.handeledit}
                    handeldelete={this.handeldelete}
                />



            </div>
        );
    }
}

export default EComerce;
