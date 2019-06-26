import React from "react";
import { store } from "../../store";
import { getData } from "../../api";
import Title from "../../components/yiyan/Title";
import "./index.css";

class Yiyandetail extends React.Component {
    state = {
        title: "",
        content: ""
    };

    componentDidMount() {
        store.dispatch({ type: "UPDATE_TAB", payload: "yiyan" });
        console.log(this);

        const { id } = this.props.match.params;
        this.getDatail(id);
    }
    render() {
        return (
            <div>
                <Title />
                <div className="inner content">
                    <h3
                        style={{
                            marginTop: "1.3rem",
                            marginBottom: "1rem"
                        }}>
                        {this.state.title}
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
                </div>
            </div>
        );
    }

    async getDatail(id) {
        let {
            data: { title, content }
        } = await getData(`/rest/article/${id}`);
        this.setState({ title, content });
    }
}
export default Yiyandetail;
