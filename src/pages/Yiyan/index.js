import React, { Component } from "react";
import { store } from "../../store";
import Header from "../../components/yiyan/Header";
import Tab from "../../components/yiyan/Tab";
import List from "../../components/yiyan/List";
import Author from "../../components/yiyan/Author";
import { connect } from "react-redux";

class Yiyan extends Component {
    componentDidMount() {
        store.dispatch({ type: "UPDATE_TAB", payload: "yiyan" });
        console.log(this);
    }

    render() {
        return (
            <div>
                <Header />
                <Tab />
                {this.props.yiyantab === "yizhan" ? <Author /> : <List />}
            </div>
        );
    }
}
export default connect(store => store)(Yiyan);
